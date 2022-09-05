import React from 'react'
import { BrowserRouter as Router, Route ,Link, Routes, Outlet} from "react-router-dom";
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Fincas from '../../pages/fincas/Fincas'
import Home from '../../pages/home/Home'

import '../../index.css'

const Layout = () => {
    return(
        <div className="container">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
};
export default Layout;