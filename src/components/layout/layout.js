import React from 'react'
import Header from './header/header'
import Footer from './footer/footer'
import Welcome from './main/welcome'
import 'css/wrapper.scss'

const Layout = () => {
    return (
        <div className='wrapper'>
            <Header />
            <Welcome />
            <Footer />
        </div>
    )
}

export default Layout