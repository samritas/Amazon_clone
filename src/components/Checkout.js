import React from 'react'
import './chekout.css'
import Subtotal from './Subtotal'
function Checkout() {
  return (
    <div classname='checkout' style={{display:'flex',height: 'max-content',padding: '20px'}}>
      <div className='checkout_left'>
        <img
         className="checkout__ad"
         src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
         alt=""
        />
        <h3>Hello</h3>
        <h2 className="checkout__title">Your shopping Basket</h2>

      </div>
      <div className='checkout_right' style={{width:'100%'}}>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
