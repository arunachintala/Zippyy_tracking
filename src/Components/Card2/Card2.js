import './Card2.css'
import Button from '../Button/Button';
function Card2({ text1 }) {
    return (
        <div className='Card-container'>
            <p1 className="card-text">Orderid:<span style={{ fontWeight: '400px' }}>{text1}</span></p1>
            <p1 className="card-des">Sorry ! Invalid order-id</p1>
            <Button />
        </div>
    )
}
export default Card2;