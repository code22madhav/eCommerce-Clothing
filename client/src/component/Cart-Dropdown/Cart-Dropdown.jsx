import './cartDropdown.style.scss';
import Button from '../Button/Button.component';

const CartDropdown = () => {  
    return (
      <div className='cart-dropdown-container'>
        <div className='cart-items'>
          
        </div>
        <Button>GO TO CHECKOUT</Button>
      </div>
    );
  };
  
  export default CartDropdown;