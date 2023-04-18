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
                    // url={'https://raw.githubusercontent.com/onbw23/onbw23.github.io/main/mov/test.mp4'}
                    width='100%'
                    height='100%'
                    muted={true}
                    playing={true}
                    loop={true}
                    // controls={true}
                    playsinline={true} // 아이폰?에서 영상플레이어 말고 제자리에서 재생
                />
            </div>
        </div>
        
    )
}

export default VideoPage