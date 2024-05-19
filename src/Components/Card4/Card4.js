import React from 'react'
// import { Card } from 'antd'
import rect from '../../assets/Rectangle 6319.png'
function Card4() {
    return (

        <div style={{ backgroundColor: '#FBEAE7', display: 'flex', flexDirection: 'row', border: '1px ', borderRadius: '16px' }}>
            <div style={{ marginTop: '60px', marginLeft: '30px', width: '58%' }}>
                <h1 style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '36px', lineHeight: '54px', color: '#121114' }}>Customise your tracking page</h1>
                <p style={{ color: '#5F5A6B', fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24.83px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget sem iaculis, congue ligula ac, imperdiet purus. Nunc elementum massa metus, id consectetur justo aliquet quis.</p>
            </div>
            <div style={{ width: '44%' }}>
                <img src={rect} alt="nologo"></img>
            </div>
        </div>

    )
}
export default Card4;