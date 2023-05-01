import React, { useRef } from "react"
import Header from './header/header'
import Footer from './footer/footer'
import MainPage from './main/mainPage'
import 'css/wrapper.scss'


const Layout = () => {
    const moveRef = useRef();

    const func = {
        moveScroll : (page) => {
            console.log(page)
            moveRef.current.moveScroll(page)
        }
    }
    
    return (
        <div className='wrapper'>
            <Header 
                func={func}/>
            <MainPage 
                ref={moveRef}/>
            <Footer />
        </div>
    )
}

export default Layout