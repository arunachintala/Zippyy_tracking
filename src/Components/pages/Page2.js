import React from 'react';
import { Card } from 'antd';
import logo from '../../assets/zippyy_logo.png';
import Stepper from '../Stepper/HorizontalStepper'
import post from '../../assets/post.png'
import AddressBox from '../AddressBox/AddressBox';
import Deliverydetails from '../Deliverydetails/Deliverydetails';
function Page2() {
    return (
        <div >
            <Card style={{ width: '693px', paddingLeft: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <p style={{ color: "#5F5A6B", fontFamily: 'Poppins', fontWeight: '700', fontSize: '16px', lineHeight: '24px' }}>
                        Order id : <span style={{ fontWeight: '400' }}>12123345ASX</span>
                    </p>
                    <p style={{ color: "#5F5A6B", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>
                        Last updated: <span style={{ color: 'black', fontWeight: '500' }}>May 16, 01:00pm UTC </span>
                    </p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img style={{ marginTop: '100px' }} src={logo} alt="Nologo" />
                </div>
                <Stepper />
                <div style={{ color: "#D9D9D9", fontFamily: 'Poppins', fontWeight: '400', fontSize: '14px', lineHeight: '21px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '40px' }}>
                    <p>Estimated Delivery Date</p>
                    <p>Carrier</p>
                </div>
                <div style={{ color: "#D54029", fontFamily: 'Poppins', fontWeight: '600', fontSize: '24px', lineHeight: '36px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <p>Thursday, May 16</p>
                    <img src={post} alt="nologo" />
                </div>
                <div style={{ color: "#D9D9D9", fontFamily: 'Poppins', fontWeight: '400', fontSize: '14px', lineHeight: '21px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '40px' }}>
                    <p>Latest shipment status</p>
                    <p>Carrier tracking id</p>
                </div>
                <div style={{ color: "#D54029", fontFamily: 'Poppins', fontWeight: '600', fontSize: '24px', lineHeight: '36px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <p>Thursday, May 16</p>
                    <p>123XXXXXXX</p>
                </div>
                <Deliverydetails />
            </Card>
            <AddressBox />
            <div style={{ position: 'absolute', top: '1125px', left: '1269px' }}>
                <p style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '12px', lineHeight: '18px', color: '#121114' }}>Powered by Zippyy</p>
            </div>
        </div>

    );
}

export default Page2;
