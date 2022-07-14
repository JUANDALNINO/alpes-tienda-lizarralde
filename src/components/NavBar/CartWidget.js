import cartImage from '../../assets/cart.svg';
import './styles/car.css';

const CartWidget = () => {
    return (
        <div className="containterCar">
            <img className="cartImage" src={cartImage} />
            <p className="pCar">4</p>
        </div>
    )
}

export default CartWidget;