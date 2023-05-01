import React, {forwardRef} from 'react'

const ContactPage = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='contact-page'>
            <span className='contact-item'>CONTACT PAGE</span>
        </div>
    )
})

export default ContactPage