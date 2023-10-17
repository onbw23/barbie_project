import React, {useState, useEffect} from "react";
import 'css/componentCss/textField.scss'

const CUSTextField = ({id, label, type, value, required, placeholder, onChange, maxLength=40}) => {

    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [isError, setIsError] = useState('')

    useEffect(() => {
        if(!!isError && isTooltipVisible) {
            const timer = setTimeout(() => {
                setIsError('')
                setIsTooltipVisible(false)
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
        
    }, [isError, isTooltipVisible]);

    const handleBlur = () => {
        if(type === 'tel') {
            checkTel(value)
        } 
        else if(type === 'email') {
            checkEmail(value);
        } 
        if(!!isError) {
            setIsTooltipVisible(true)
        }
    }
    const handleFocus = () => {
        if(!!isError && isTooltipVisible) {
            setIsError('')
            setIsTooltipVisible(false)
        }
    }
    const checkTel=(v)=> {
        // console.log('tel', v)
        let errors = {};
        v = v.replace(/[^0-9]/g, '') // 숫자를 제외한 모든 문자 제거
        .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);

        if(!!v && v.length < 10) {
            errors.telError = true;
            setIsError('전화번호가 잘못되었습니다.')
        } else {
            errors.telError = false;
            setIsError('')
        }
        let val = {
            value: v,
            errors: errors
        }
        

        return val;
    }
    const checkEmail=(v)=> {
        // console.log('email', v)
        let errors = {};
        v = v.replace(/\s/g, '')
        const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/ // 이메일 형식 체크

        if(!!v && !regex.test(v)) {
            errors.emailError = true;
            setIsError('이메일 형식이 잘못되었습니다.')
        } else {
            errors.emailError = false;
            setIsError('')
        }
        let val = {
            value: v,
            errors: errors
        }
        // console.log(val)
        
        return val;
    }
    return (
        <div className={`custom-text-field`}>
            <label className="text-label">{label}</label>
            <input
                id={id}
                type='text'
                // className='text-input'
                className={`text-input ${!!isError && isTooltipVisible ? 'error' : ''}`}
                onBlur={handleBlur}
                onFocus={handleFocus}
                required={required}
                placeholder={placeholder}
                maxLength={type === 'tel' ? 13 : maxLength}
                value={value}
                onChange={e => {
                    let val = {};
                    let v = e.target.value
                    if(type === 'tel') {
                        val = checkTel(v)
                    } 
                    else if(type === 'email') {
                        val = checkEmail(v);
                    } 
                    else {
                        val.value = v;
                    }
                    
                    onChange(val)
                }}
            />
            {!!isError && <div className="tooltip">{isError}</div>}
        </div>
      );
}

export default CUSTextField

