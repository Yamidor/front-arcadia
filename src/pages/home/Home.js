import React from'react'
import { Link } from "react-router-dom";
import './Home.css'
import Trabajador from '../../img/trabajador.png'
import Ventas from '../../img/ventas.png'
import Compras from '../../img/compras.png'
import Reporte from '../../img/reportes.png'
import Finca from '../../img/finca.jpg'

const Home = ()=>{
    return(
        <main>
            <Link to="fincas">
                <article className="article-menu">
                    <h2>Fincas</h2>
                    <img className="logo-menu" src={Finca} alt="logo"/>
                </article>
            </Link>
            
            <article className="article-menu">
                <h2>Trabajadores</h2>
                <img className="logo-menu" src={Trabajador} alt="logo"/>
            </article>
            <article className="article-menu">
                <h2>Ventas</h2>
                <img className="logo-menu"  src={Ventas} alt="logo"/>
            </article>
            <article className="article-menu">
                <h2>Compras</h2>
                <img className="logo-menu"  src={Compras} alt="logo"/>
            </article>
            <article className="article-menu">
                <h2>Reportes</h2>
                <img className="logo-menu"  src={Reporte} alt="logo"/>
            </article>
            <Link to="fincas">
                <article className="article-menu">
                    <h2>Fincas</h2>
                    <img className="logo-menu" src={Finca} alt="logo"/>
                </article>
            </Link>
        </main>
    )
}
 export default Home;


