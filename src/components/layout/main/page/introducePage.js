import React, {forwardRef} from 'react'

const IntroducePage = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='introduce-page'>
            <span className='introduce-item'>INTRODUCE PAGE</span>
        </div>
    )
})

export default IntroducePage