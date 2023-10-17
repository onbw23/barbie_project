import React, { forwardRef } from 'react'
import { CUSPhotoGrid } from 'components/CUScomponent';

const TitlePage = forwardRef((props, ref) => {
    const func = () => {
        // ref.current.scrollIntoView({ behavior: 'smooth'})
        ref.current.scrollIntoView()
    }
    return (
        <div ref={ref} className='title-page'>
            <CUSPhotoGrid func={func}/>
        </div>
    )
})

export default TitlePage