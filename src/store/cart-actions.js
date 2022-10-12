import axios from "axios"
import { URL_FIRE_CART } from "../config/urls"
import { cartActions } from "./cart-slice"

export const addItemToCart = (cart) => {

    return (dispatch) => {
        const sendReq = async () => {
            try {
                await axios.put(URL_FIRE_CART, {
                    items: cart.items,
                    totalItems: cart.totalItems,
                    grandTotal: cart.grandTotal
                });
            } catch (e) {
                console.log(e.message);
            }
        }
        sendReq();
    }
}

export const fetchCart = () => {
    return dispatch => {
        const getCart = async () => {
            try {
                const res = await axios.get(URL_FIRE_CART);
                dispatch(cartActions.replaceCart(res.data));
            } catch (e) {
                console.log(e.message);
            }
        }
        getCart();
    }
}