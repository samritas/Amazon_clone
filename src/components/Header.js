import React from 'react'
import logo from './Amazon-logo.png'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        
        <img className='header_logo' src={logo} alt="" />
        <div className='header_search'>
            <input  className='header_searchInput' type='text' />
            {/* <div className='search'> */}
            <SearchIcon className='Header_searceIcon'></SearchIcon>
            {/* </div> */}
            
        </div>
        <dev className='header_nav'>
            <dev className='header_opetion' >
                 <span className='headerOpetionLineone' >HelloGuest</span>
                 <span className='headerOpetionLineone' >sign in</span>
            </dev>
            <dev className='header_opetion' >
                 <span className='headerOpetionLineone' >Return</span>
                 <span className='headerOpetionLineone' >&Order</span>
            </dev>
            <dev className='header_opetion' >
                 <span className='headerOpetionLineone' >Your</span>
                 <span className='headerOpetionLineone' >Prime</span>
            </dev>
            <dev className="header_opetionBasket">
                <ShoppingBasketIcon/>
                <span>0</span>

            </dev>

        </dev>
      
    </div>
  )
}

export default Header
