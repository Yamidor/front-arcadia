import React from'react'
import './Header.css'
import Logo from '../../img/Logo.jpg'
const Header = ()=>{
    return(
        <header className="header">
            <img className="header-img--logo" src={Logo} alt="logo"/>
            <h1 className="header-title">Encabezado</h1>
            <img className="header-img--logo" src={Logo} alt="logo"/>
        </header>
    )
}
 export default Header;