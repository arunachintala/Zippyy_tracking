import React from 'react'
import './Card1.css'
import Button from '../Button/Button';
function Card1({ text1, text2 }) {
    return (
        <div className='Card-container'>
            <p1>Order id:<span style={{ fontWeight: '400' }} >{text1}</span></p1>
            <p1>Status:<span style={{ fontWeight: '400' }}>{text2}</span></p1>
            <Button />
        </div>
    )
}
export default Card1;