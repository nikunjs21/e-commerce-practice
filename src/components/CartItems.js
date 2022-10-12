
import classes from './CartItems.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const CartItems = props => {

    const { id, title, description, image, price, category } = props;
    const dispatch = useDispatch();

    const onItemAddHandler = () => {
        dispatch(cartActions.addItemToCart({
            qty: 1,
            id,
            title,
            description,
            image,
            price,
            category
        }));
    }

    const onItemRemoveHandler = () => {
        dispatch(cartActions.removeItemFromCart(id));
    }

    return (
        <div className={classes.cartitem}>
            <h3 className={classes.cartheading}>{props.title}</h3>
            <div>
                <button onClick={onItemRemoveHandler} className={classes.btn}>-</button>
                <label className={classes.qty}>{props.qty}</label>
                <button onClick={onItemAddHandler} className={classes.btn}>+</button>
            </div>
        </div>
    );
}

export default CartItems;