
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import Card4 from '../Card4/Card4';
import Card5 from '../Card5/Card5';
import logo from '../../assets/zippyy_logo.png';
import InputField from '../InputField/InputField';
import logo1 from '../../assets/mail.png';
import './Page4.css';

function Page4() {
  const navigate = useNavigate();

  const handleTrackClick = () => {
    navigate('/page3');
  };

  return (
    <div>
      <Card>
        <Card4 />
        <div>
          <h1 style={{ textAlign: 'center', paddingTop: '30px', color: '#121114', fontFamily: 'Poppins', fontWeight: '500', fontSize: '32px', lineHeight: '48px' }}>Track your shipment</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <img src={logo} alt="nologo" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <p style={{ color: '#121114', textAlign: 'center', paddingTop: '30px', fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Enter up to 25 of your Zippyy order IDs (Comma separated)</p>
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
            <InputField type="text" placeholder="XXXXXX21233, WWWW1122, QQQWWW1122" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
            <button
              style={{
                fontFamily: 'Poppins',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '24px',
                backgroundColor: '#D54029',
                color: 'white',
                border: '1px solid',
                padding: '10px',
                borderRadius: '6px',
                cursor: 'pointer',
                width: '180px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={handleTrackClick}
            >
              Track
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card5 />
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #D9D9D9', marginTop: '30px', marginBottom: '20px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '15px' }}>
              <li style={{ display: 'inline', color: '#68717D', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '18px' }}>
                &copy; 2024 GoDash. All rights reserved
              </li>
              <li style={{ display: 'inline', position: 'relative', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '18px', color: '#68717D' }}>
                <span style={{ marginRight: '8px' }}>•</span>
                <a href="/privacy-policy" style={{ textDecoration: 'none', color: '#68717D' }}>Privacy policy</a>
              </li>
              <li style={{ display: 'inline', position: 'relative', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '18px', color: '#68717D' }}>
                <span style={{ marginRight: '8px' }}>•</span>
                <a href="/terms-of-service" style={{ textDecoration: 'none', color: '#68717D' }}>Terms of service</a>
              </li>
              <li style={{ display: 'inline', position: 'relative', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '18px', color: '#68717D' }}>
                <span style={{ marginRight: '8px' }}>•</span>
                <a href="mailto:Support@gdoash.ai" style={{ textDecoration: 'underline', color: '#68717D' }}><img src={logo1} alt='nologo'></img> Support@gdoash.ai</a>
              </li>
            </ul>
            <div style={{ fontFamily: 'Poppins', display: 'flex', justifyContent: 'flex-end', fontSize: '12px', fontWeight: 400, lineHeight: '18px', position: 'absolute', top: '893px', left: '1300px' }}>
              <p>Powered by Zippyy</p>
            </div>
          </div>

        </div>
      </Card>
    </div>
  );
}

export default Page4;
