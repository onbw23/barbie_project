import React, {useState, useEffect} from "react";
import 'css/componentCss/snackbar.scss'
const CUSSnackbar = ({onClose, message, type}) => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true)
        const timer = setTimeout(() => {
            setIsOpen(false)
            setTimeout(() => {
                if (onClose) {
                onClose();
                }
            }, 300);
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, [setIsOpen, onClose]);

    return (
        <div className={`custom-snackbar ${!!type ? type : ''} ${isOpen ? 'open' : 'closed'}`}>
            <div className="snackbar-content">
            <p>{message}</p>
            </div>
        </div>
         
    )
}

export default CUSSnackbar