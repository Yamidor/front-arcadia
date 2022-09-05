import React from'react'
import { Outlet} from "react-router-dom";
import './Main.css'
import Logo from '../../img/Logo.jpg'
import Trabajador from '../../img/trabajador.png'
import Ventas from '../../img/ventas.png'
import Compras from '../../img/compras.png'
import Reporte from '../../img/reportes.png'
import Finca from '../../img/finca.jpg'

const Main = ()=>{
    return(
        <main className="main">
            <Outlet/>
        </main>
    )
}
 export default Main;