import Header from "./Header"
import Footer from "./Footer"
// Pages
import Home from "./pages/Home"
import Services from "./pages/Services"
import AboutUs from "./pages/AboutUs"

import { Route, Routes, BrowserRouter} from "react-router-dom"
import { useState } from 'react'

const MainTemplate = () => {

    const navInfo = [ 
        { path: '/', text: 'Inicio', element: <Home/>},
        { path: '/servicios', text: 'Servicios de topografía', element: <Services/>},
        { path: '/nosotros', text: 'Nosotros', element: <AboutUs/> }    
    ]

    const routesList = navInfo.map((nav) => <Route path= {nav.path} element= {nav.element}  key={nav.path}/>)
    const [open, setOpen] = useState(false)

    const handleClick = () =>{
        setOpen(!open)
    }


    return(
        <>
        <BrowserRouter>
            <Header navInfo={navInfo} open={open} handleClick={handleClick}>
            </Header>
            <main className='main' >
                <Routes>
                    {routesList}
                </Routes>
            </main>
            <Footer>

            </Footer>
        </BrowserRouter>
        </>
    )
}

export default MainTemplate