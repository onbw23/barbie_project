import React from 'react'
import VideoPage from './page/videoPage'
import TitlePage from './page/titlePage'
import IntroducePage from './page/introducePage'
import ContactPage from './page/contactPage'

const Welcome = () => {
    return (
        <div>
            <VideoPage/>
            <TitlePage/>
            <IntroducePage/>
            <ContactPage/>
        </div>
        
    )
}

export default Welcome
