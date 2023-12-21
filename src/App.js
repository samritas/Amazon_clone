import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React,{useEffect} from "react";
import { auth } from "./components/firebase";
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment";
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
function App() {
    const [{}, dispatch] = useStateValue();
    const promise=loadStripe(
      'pk_test_51OOwT7GAsmpVmdeiJr3ElHAHmlEcR0dyNN4bhhKkgfXTkJDct5w0HVCaWrFOuxpzlTFyUxQwt1zlkmSu4obPb4fY00vP351Wsu'
    )

        useEffect(() => {
          // will only run once when the app component loads...
      
          auth.onAuthStateChanged((authUser) => {
            console.log("THE USER IS >>> ", authUser);
      
            if (authUser) {
              // the user just logged in / the user was logged in
      
              dispatch({
                type: "SET_USER",
                user: authUser,
              });
            } else {
              // the user is logged out
              dispatch({
                type: "SET_USER",
                user: null,
              });
            }
          });
        }, []);

  return (
    <Router>
        <>
        <Routes>
            <Route path="/" element={<><Header/><Home/></>}/>
            <Route path="/checkout" element={<><Header/><Checkout/></>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Payment" element={<>
                                            <Header/>
                                            <Elements stripe={promise}>
                                            <Payment/>
                                            </Elements>
                                            
                                            </>}/>
        </Routes>
        </>
    </Router>
    )
}

export default App;
