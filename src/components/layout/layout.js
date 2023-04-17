import React from 'react'
import Header from './header/header'
import Footer from './footer/footer'
import Welcome from './main/welcome'

const Layout = () => {
    return (
        <div className='layout'>
            <Header />
            <Welcome />
            <Footer />
        </div>
    )
}

export default Layout