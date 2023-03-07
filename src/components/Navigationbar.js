import React from 'react'
import logo from '../assets/logo.png'

function Navigationbar() {
    return (
        <div className='nav-bar'>
            <img src={logo} alt='Industrial Safety Exam Prep' height='50px' />
            <div className='nav-item'>HOME</div>
            <div className='nav-item'>EXAM Information</div>
            <div className='nav-item'>QUESTIONS</div>
            <div className='nav-item'>LOG IN</div>
            <div className='nav-item'>CONTACT</div>
        </div>
    )
}

export default Navigationbar