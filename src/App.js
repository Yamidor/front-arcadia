import React from 'react'
import { BrowserRouter, Route ,Link, Routes} from "react-router-dom";
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Fincas from './pages/fincas/Fincas'
import Home from './pages/home/Home'

import './index.css'
const App = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="fincas" element={<Fincas />} />
                    <Route path="trabajadores" element={<Fincas />} />
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
};
export default App;