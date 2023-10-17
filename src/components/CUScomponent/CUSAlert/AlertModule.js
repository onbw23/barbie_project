import React, { useEffect}  from 'react'
import 'css/componentCss/alert.scss'

const AlertModule = ({ setAlertOpen, message}) => {

    useEffect(() => {
        document.body.style= `overflow: hidden`;
        return () => document.body.style = `overflow: auto`
      }, [])

      
    const closeAlert = () => {
        setAlertOpen({open:false})
    }
    
    return (
        <div className='container'>
            <p>{message}</p>
            <button className='close' onClick={closeAlert}>
                닫기
            </button>
        </div>
    );
}

export default AlertModule