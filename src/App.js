import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <>
        <Routes>
            <Route path="/" element={<><Header/><Home/></>}/>
            <Route path="/checkout" element={<><Header/><Checkout/></>}/>
        </Routes>
        </>
    </Router>
    )
}

export default App;
