import React, { useEffect, useState } from 'react'
import AlertModule from './AlertModule'

const CUSAlert = ({open, message, setAlertOpenBase}) => {
    const [alertOpen, setAlertOpen] = useState(open);

    useEffect(() => {
        setAlertOpen(open);
    }, [open]);

    const closeAlert = () => {
        setAlertOpenBase({open:false})
    }

    return (
        alertOpen && <div className='alertBase' 
        onClick={e => closeAlert(false)}
        >
            <AlertModule setAlertOpen={setAlertOpenBase} message={message} />
        </div>
    )
}

export default CUSAlert