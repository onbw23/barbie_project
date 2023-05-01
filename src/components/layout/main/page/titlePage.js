import React, { forwardRef } from 'react'

const TitlePage = forwardRef((props, ref) => {

    return (
        <div ref={ref} className='title-page'>
            <span className='title-item'>TITLE PAGE</span>
        </div>
    )
})

export default TitlePage