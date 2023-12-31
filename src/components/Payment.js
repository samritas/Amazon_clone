import React,{useState,useEffect} from 'react'
import { Link ,useNavigate} from "react-router-dom";
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { useStripe,useElements } from '@stripe/react-stripe-js';
import axios from './axios'
import './Payment.css'
import { CardElement } from '@stripe/react-stripe-js';
import { db } from './firebase';
// import { useHistory } from 'react-router-dom';

function Payment() {
    // const history = useHistory();
    const navigate=useNavigate()

    const stripe = useStripe();
    const elements = useElements();
    
    const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

    const [{ basket, user }, dispatch] = useStateValue();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])
    console.log("basket",basket)

    console.log('THE SECRET IS >>>', clientSecret)
  
    const handleSubmit = async (event) => {
        
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {

            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })
        

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

           navigate("/orders")
        })

    }
    const handleChange=event=>{
        setDisabled(event.empty)
        setError(event.error? event.error.message:"")
    }

  return (
    <div className='payment'>
    <div className='payment__container'>
        <h1>Checkout (<Link to='/checkout'>{basket.length} item</Link>)</h1>
       <div className='payment__section '>
            <div className='payment__title'>
                <h1>Delivery Address</h1>
            </div>
            <div className='payment__title '>
                <p>{user?.email}</p>
                <p>123 react </p>
                <p>Chicago</p>

            </div>
       </div>
       <div className='payment__section '>
            <div className='payment__title'>
                <h1>Review item and delivery</h1>
            </div>
            <div className='payment__items'>

                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
       </div>
       <div className='payment__section '>
            <div className='payment__title '>
                <h1>paiment method</h1>
            </div>
            <div className="payment__details">
                            {/* Stripe magic will go */}

                            <form onSubmit={handleSubmit}>
                            

                                <div className='payment__priceContainer'>
                                    <CardElement onChange={handleChange}/>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing||disabled||succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                    </div>
                                </form>
                                </div>
       </div>
    </div>
    </div>
    
  )
}

export default Payment
