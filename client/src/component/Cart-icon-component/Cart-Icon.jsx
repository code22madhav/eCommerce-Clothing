import { ReactComponent as Shopppingbag} from "../../assets/shopping-bag.svg"; 
import './cartIcon.style.scss'

const CartIcon=()=>{
    return(
        <div className='cart-icon-container'>
            <Shopppingbag className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;