import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import VideoPage from './page/videoPage'
import TitlePage from './page/titlePage'
import IntroducePage from './page/introducePage'
import ContactPage from './page/contactPage'

const MainPage = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
      // 부모 컴포넌트에서 사용할 함수를 선언
        moveScroll
    }))

    const myRefs = {
        videoRef : useRef(),
        titleRef : useRef(),
        introduceRef : useRef(),
        contactRef : useRef()
    }

    const moveScroll = (page) => {
        console.log('mainPage --> ', page)
        if(page === 'TITLE') {
            myRefs.titleRef.current.scrollIntoView({ behavior: 'smooth'});
        } else if(page === 'INTRODUCE') {
            myRefs.introduceRef.current.scrollIntoView({ behavior: 'smooth'});
        } else if(page === 'CONTACT') {
            myRefs.contactRef.current.scrollIntoView({ behavior: 'smooth'});
        } 
    }
    return (
        <div>
            <VideoPage ref={myRefs.videoRef}/>
            <TitlePage ref={myRefs.titleRef}/>
            <IntroducePage ref={myRefs.introduceRef}/>
            <ContactPage ref={myRefs.contactRef}/>
        </div>
        
    )
})

export default MainPage
