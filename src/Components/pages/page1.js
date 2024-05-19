import React from "react";
import Card1 from "../Card1/Card1";
import Card2 from "../Card2/Card2";

function Page1() {
    return (

        <div Styles={{ display: 'flex', flexdirection: 'row' }}><Card1 text1={'2203331212'} text2={'Shipment info shared'} />

            <Card1 text1={'2203331212'} text2={'Tracking not generated'} />
            <Card2 text1={'2203331212'} />
            <a href="http://localhost:3000/" style={{ margin: '30px', color: '#D54029', fontFamily: 'Poppins', fontWeight: 400, fontSize: '12px', lineHeight: '18px', textAlign: 'center', textDecoration: 'underline', textDecorationColor: '#D54029' }}> Need help?</a>
            <div >
                <button
                    style={{
                        backgroundColor: 'white',
                        border: '1px solid black',
                        borderRadius: '6px',
                        padding: '10px',
                        fontSize: '16px',
                        fontWeight: '500',
                        color: '#121114',
                        textAlign: 'center',
                        width: '240px',
                        height: '36px',
                        fontFamily: 'Poppins',
                        left: '58px',
                        top: '881px',
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    Back
                </button>


            </div>
        </div>

    )
}
export default Page1;