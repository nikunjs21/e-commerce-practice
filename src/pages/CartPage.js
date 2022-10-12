import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import Header from "../components/Header";

const CartPage = () => {
    const cart = useSelector(state => state.cart);

    return (
        <>
            <Header />
            {cart.items.map(c => <CartItems
                key={c.id}
                id={c.id}
                qty={c.qty}
                price={c.price}
                title={c.title}
                description={c.description}
                image={c.image}
                category={c.category}
            />)}
            <h1>Total Items: {cart.totalItems}</h1>
            <h1>Grand Total: {cart.grandTotal.toFixed(2)}</h1>
        </>
    );
}

export default CartPage;