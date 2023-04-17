import React from 'react'
import ReactPlayer from 'react-player'
import 'css/page.scss'

const VideoPage = () => {
    return (
        <div className='video-area'>
            <div className='video-page'>
                <ReactPlayer
                    className='react-player'
                    url={process.env.PUBLIC_URL + '/mov/test.mp4'}
                    width='100%'
                    height='100%'
                    muted={true}
                    playing={true}
                    loop={true}
                />
            </div>
        </div>
        
    )
}

export default VideoPage