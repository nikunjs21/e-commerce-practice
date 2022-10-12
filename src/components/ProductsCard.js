import { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap"
import { Card } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const cartOpHandlerStyles = {
    display: 'flex',
    justifyContent: 'space-between'
}

const cartQtyStyle = {
    display: 'inline-block',
    width: '100px'
}

const ProductsCard = props => {
    const { id, title, description, image, price, category } = props;
    const dispatch = useDispatch();

    const [cartQty, setCartQty] = useState(1);
    // const onRemoveQtyHandler = () => {
    //     setCartQty(prevQty => {
    //         if (prevQty === 0) {
    //             return prevQty;
    //         }
    //         return +prevQty - 1;
    //     });
    // }
    // const onAddQtyHandler = () => {
    //     setCartQty(prevQty => {
    //         return +prevQty + 1;
    //     });
    // }

    const onCartQtyChangeHandler = (event) => {
        const curVal = event.target.value;
        setCartQty(curVal);
    }

    const onAddToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            qty: parseInt(cartQty),
            id,
            title,
            description,
            image,
            price,
            category
        }));
        console.log('cartActions.addItemToCart');
    }

    useEffect(() => {
        console.log('qty', cartQty);
    }, [cartQty]);

    return (
        <Col md={3}>
            <Card style={{ width: '18rem' }} md={3}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    {/* <Card.Text>{props.description}</Card.Text> */}
                    <div style={cartOpHandlerStyles}>
                        {/* <Button onClick={onRemoveQtyHandler} variant="primary" size="sm">-</Button> */}
                        <Form.Control style={cartQtyStyle} onChange={onCartQtyChangeHandler} value={cartQty} />
                        {/* <Button onClick={onAddQtyHandler} variant="primary" size="sm">+</Button> */}
                        <Button varient="primary" onClick={onAddToCartHandler} >Add to cart</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default ProductsCard;