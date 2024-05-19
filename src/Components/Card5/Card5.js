import React from 'react';
import box from '../../assets/Vector.png';
import phone from '../../assets/phone.png';

function Card5() {
    return (
        <div style={{ marginTop: '20px', backgroundColor: '#F5F8F8', justifyContent: 'flex-end', width: '476px', height: '151px' }}>
            <div style={{ paddingTop: '10px ', margin: '30px', color: "#121114", fontFamily: 'Poppins', fontWeight: '500', fontSize: '22px', lineHeight: '33px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <p>Contact Information</p>
                <div style={{ color: '#5F5A6B' }}>
                    <img src={box} alt="logo" />
                    <span style={{ fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>support@godash.ai</span>
                </div>
                <div style={{ color: '#5F5A6B' }}>
                    <img src={phone} alt="logo" />
                    <span style={{ fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>1800097866</span>
                </div>
            </div>
        </div>
    );
}

export default Card5;
