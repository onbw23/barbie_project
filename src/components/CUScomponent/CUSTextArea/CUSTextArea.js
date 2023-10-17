import React from "react";
import 'css/componentCss/textArea.scss'

const CUSTextArea = ({id, label, type, value, required, placeholder, onChange, maxLength=500, isTall}) => {
    return (
        <div className={`custom-text-area ${isTall ? 'tall' : ''}`}>
            <label className="text-label">{label}</label>
            <textarea
                id={id}
                type='text'
                className={`text-area`}
                required={required}
                placeholder={placeholder}
                maxLength={type === 'tel' ? 13 : maxLength}
                value={value}
                onChange={e => {
                    let val = {};
                    val.value = e.target.value;
                    
                    onChange(val)
                }}
            />
        </div>
      );
}

export default CUSTextArea