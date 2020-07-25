import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

function Header() {
    return (
        <nav className="header">

            {/* Logo */}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            </Link>

            {/* SearchBox */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            {/* Three links */}
            <div className="header__nav">
                {/* HiUsername */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Hello there</span>
                        <span className="header__optionLine2">Sign In</span>
                    </div>
                </Link>

                {/* ReturnsAndOrders */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Returns</span>
                        <span className="header__optionLine2">& Orders</span>
                    </div>
                </Link>

                {/* YourPRIME */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Your</span>
                        <span className="header__optionLine2">PRIME</span>
                    </div>
                </Link>

            </div>

            {/* Cart with number */}
            <Link to="/checkout" className="header__link" >
                <div className="header__optionBasket">
                    <ShoppingCartIcon />
                    <span className="header__optionLine2 header__basketcount">0</span>
                </div>
            </Link>

        </nav>
    )
}

export default Header