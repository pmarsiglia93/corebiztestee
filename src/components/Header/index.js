import React from 'react'

import "../Header/styles.css"
import ShoppingCartContext from '../../contexts/ShoppingCartContext'
import menuBurguer from '../../images/menu-icon.svg'
import Logo from '../../images/logo-icon.svg'
import Magnifying from '../../images/magnifying-icon.svg'
import myAccount from '../../images/myaccount-icon.svg'
import shoppingCart from '../../images/shopping-cart.svg'

const Header = () => {
    return (
        <ShoppingCartContext.Consumer>
            {({cart}) => 
                (
            <header className="header">
                <div className="menu-logo">
                
                    <img src={menuBurguer}className="menu-burguer" alt="Burguer menu"/>
               
                <img className="logo" src={Logo} alt="Logo Corebiz"/>
                </div>
                
                <form className="form">
                <input 
                                    className="search-box"
                                    type="text" name="searchbox" 
                                    id="searchbox" 
                                    placeholder="O que está procurando?"
                                />
                                <button className="search-button">
                                <img src={Magnifying} alt="Search"/>
                                </button>
                
                </form>
                <button className="my-account">Minha Conta
                    <img src={myAccount} alt="My User"/>
                </button>
                <button className="my-shopping-cart">
                                <img src={shoppingCart} alt="My Cart"/>
                                {cart.length > 0 ? <span>{cart.length}</span> : null}
                </button>

            </header>

            )
            }
        </ShoppingCartContext.Consumer>
    )
}

export default Header;