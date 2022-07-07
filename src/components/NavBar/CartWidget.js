import cartImage from '../../assets/cart.svg';
import './styles/car.css';

const CartWidget = () => {
    return (
        <div class="containterCar">
            <img class="cartImage" src={cartImage} />
            <p class="pCar">4</p>
        </div>
    )
}

export default CartWidget;