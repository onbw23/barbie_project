import React from 'react'
import Header from './header/header'
import Footer from './footer/footer'
import MainPage from './main/mainPage'
import 'css/wrapper.scss'

const Layout = () => {
    return (
        <div className='wrapper'>
            <Header />
            <MainPage />
            <Footer />
        </div>
    )
}

export default Layout