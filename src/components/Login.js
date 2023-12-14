import React,{useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
// import { auth } from "./firebase";
function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const signin=(e)=>{
        e.preventDefault();
    }
    const register=(e)=>{
        e.preventDefault();
        // 
        // .createUserWithEmailAndPassword(email, password)
        // .then((userCredential) => {
        //   console.log(userCredential);
        // })
    }
  return (
    <div className="container">
        <Link to="/">
    <div className="logo">
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="Amazon Logo" />
    </div>
    </Link>
    <form>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <div className="form-group">
        <button type="submit" onClick={signin}>Sign In</button>
      </div>
    </form>
    <p className="terms-text">
      By signing-in you agree to the AMAZON FAKE CLONE <a href="#">Conditions of Use & Sale</a>. Please see our <a href="#">Privacy Notice</a>,
      our <a href="#">Cookies Notice</a>, and our <a href="#">Interest-Based Ads Notice</a>.
    </p>
    <button className="create-account-button" onClick={register}>Create your Amazon Account</button>
  </div>
  )
}

export default Login

