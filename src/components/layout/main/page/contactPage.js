import React, {forwardRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import { CUSTextField, CUSAlert, CUSSnackbar, CUSTextArea, CUSButton } from 'components/CUScomponent';

const ContactPage = forwardRef((props, ref) => {

    const [inputValue, setInputValue] = useState({name: '', tel:'' , email:'',rmk:''})
    const [inputError, setInputError] = useState({nameError: false, telError: false, emailError: false})
    const [alertOption, setAlertOpen] = useState({open: false, message: ''})
    const [snackbarOption, setSnackbarOption] = useState({open: false, message: '', type: ''})

    /* input Tag Value - Stage에서 관리 */
    const changeInput = (e, id) => {

        console.log('changeInput ==>', e)

        let value = e.value

        setInputValue({...inputValue, [id]: value})
        setInputError({...inputError, ...e.errors})
    }

    const onSnackbarClose = () => {
        setSnackbarOption({open: false})
    }
    /* 이메일 전송 */
    const submitForm = async(e) => {
        e.preventDefault();
        
        if(inputError.nameError || inputError.telError || inputError.emailError) {
            // setAlertOpen({open: true, message: '입력 형식 확인'})
            setSnackbarOption({open:true, message: '입력 형식 확인', type: 'error'})
            // alert('입력 형식 확인')
            return;
        }
        const formParam = {
            custom_name: inputValue.name,
            custom_tel: `${inputValue.tel}`,
            custom_email: inputValue.email
        }

        console.log(inputValue)

        // try {
        //     const res = await emailjs.send('barbie_test_service', 'template_pmjyn8l', formParam, '-7jl5QMWEUxWjIPc_')

        //     if(res.status === 200) {
        //         alert('메일이 전송되었습니다.')
        //     } else {
        //         alert('메일이 전송에 실패하였습니다. 전화로 문의 바랍니다.')
        //     }
        // } catch(error) {

        //     console.error('submitForm ==> ', error)
        //     alert('메일이 전송에 실패하였습니다. 전화로 문의 바랍니다.')
        // }
        setInputValue({name: '', tel:'', email:'', rmk: ''})
        setInputError({nameError: false, telError: false, emailError: false})
    }

    return (
        <div ref={ref} className='contact-page'>
            <span>Contact Us</span>
            <form onSubmit={e => submitForm(e)}>  
                <div>
                    <ul>
                        <li>
                            <div className='contact-div'>
                                <div className='contact-item'>
                                    <CUSTextField
                                        label='성함'
                                        id='name'
                                        placeholder='성함'
                                        required={true}
                                        value={inputValue.name}
                                        onChange={e => {changeInput(e, 'name')}}
                                        type='text'
                                        />
                                </div>
                            </div>

                            <div className='contact-div'>
                                <div className='contact-item'>
                                    <CUSTextField
                                        label='전화번호'
                                        id='tel'
                                        placeholder='핸드폰 번호'
                                        required={true}
                                        value={inputValue.tel}
                                        onChange={e => {changeInput(e, 'tel')}}
                                        type='tel'
                                        />
                                </div>
                            </div>

                            <div className='contact-div'>
                                <div className='contact-item'>
                                    <CUSTextField
                                        label='이메일'
                                        id='email'
                                        placeholder='연락받을 이메일'
                                        required={true}
                                        value={inputValue.email}
                                        onChange={e => {changeInput(e, 'email')}}
                                        type='email'
                                        />
                                </div>
                            </div>
                            <div className='contact-div'>
                                <div className='contact-item'>
                                    <CUSTextArea
                                        label='추가문의'
                                        id='rmk'
                                        placeholder={'추가 문의사항을 \n입력해주십시오.'}
                                        value={inputValue.rmk}
                                        onChange={e => {changeInput(e, 'rmk', 'text')}}
                                        type='text'
                                        isTall={true}
                                        />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <CUSButton labelText='제출'/>
            </form>
            {/* <CUSAlert open={alertOption.open} message={alertOption.message} setAlertOpenBase={setAlertOpen} /> */}
            {snackbarOption.open && <CUSSnackbar onClose={onSnackbarClose} message={snackbarOption.message} type={snackbarOption.type} />}
        </div>
    )
})

export default ContactPage