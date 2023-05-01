import React from 'react'
import 'css/header.scss'

const Header = (props) => {
    return (
        <div className='header'>
            <div className='gnb'>
                <div className='logoImg'>
                    <img src={process.env.PUBLIC_URL + '/icon/logo.png'} alt='BARBIE'></img>
                </div>
                <div className='navi'>
                    <ul>
                        <li> <a href='#!' onClick={(e) => { props.func.moveScroll('TITLE')}}>TITLE</a> </li>
                        <li> <a href='#!' onClick={(e) => { props.func.moveScroll('INTRODUCE')}}>INTRODUCE</a> </li>
                        <li> <a href='#!' onClick={(e) => { props.func.moveScroll('CONTACT')}}>CONTACT</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header