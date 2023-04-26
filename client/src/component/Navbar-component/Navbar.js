import './Navbar-style.css'
import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/user.context'
import { SignOutUser } from '../firebase'
import CartIcon from '../Cart-icon-component/Cart-Icon'
import CartDropdown from '../Cart-Dropdown/Cart-Dropdown'

const Navbar = () => {
  const {currentUser} = useContext(UserContext);
  return (
    <nav className="navbar">
        <div className="navbar-container container">
            <CartDropdown/>
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Category</a></li>
                <li><a href="/">Contact</a></li>
                { currentUser ? (<li><Link onClick={SignOutUser}>Sign Out</Link></li>): (<li><Link to='/auth'>Sign In</Link></li>)}
            </ul>
            <div className="cartIcon"><CartIcon/> </div>
            <h1 className="logo">ShopZen-G</h1>
        </div>
    </nav> 
  )
}

export default Navbar