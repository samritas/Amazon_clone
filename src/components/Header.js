import React from 'react'
import logo from './Amazon-logo.png'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket,user }, dispatch] = useStateValue();

  return (
    <div className='header'>
              <Link to='/'>
        <img className='header_logo' src={logo} alt="" />
        </Link>
        <div className='header_search'>
            <input  className='header_searchInput' type='text' />
            {/* <div className='search'> */}
            <SearchIcon className='Header_searceIcon'></SearchIcon>
            {/* </div> */}
            
        </div>
        <div className='header_nav'>
           <Link to="/Login">
            <div className='header_opetion' >
                 <span className='headerOpetionLineone' >Hello  {!user ? 'Guest' : user.email}</span>
                 <span className='headerOpetionLineone' >sign in</span>
            
            </div>
            </Link>
            <div className='header_opetion' >
                 <span className='headerOpetionLineone' >Return</span>
                 <span className='headerOpetionLineone' >&Order</span>
            </div>
            <dev className='header_opetion' >
                 <span className='headerOpetionLineone' >Your</span>
                 <span className='headerOpetionLineone' >Prime</span>
            </dev>
             <Link to='/Checkout'>
            <dev className="header_opetionBasket">
                <ShoppingBasketIcon/>
                <span>{basket.length}</span>

            </dev>
            </Link>

        </div>
      
    </div>
  )
}

export default Header
