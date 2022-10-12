import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ProductsCard from "../components/ProductsCard";
import { URL_PRODUCTS } from "../config/urls";

const Welcome = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            try {
                setIsLoading(true);
                const res = await axios.get(URL_PRODUCTS);
                setProducts(res.data);
            } catch (e) {
                alert(e.message);
            }
            setIsLoading(false);
        }
        getProducts();
    }, []);

    return (
        <Row>
            {products.length > 0 && !isLoading && products.map(p => <ProductsCard
                key={p.id}
                id={p.id}
                title={p.title}
                category={p.category}
                description={p.description}
                image={p.image}
                price={p.price}
                rating={{
                    rate: p.rating.rate,
                    count: p.rating.cound,
                }} />)}
            {products.length === 0 && !isLoading && <p>Products not found</p>}
            {isLoading && <h1>Loading...</h1>}
        </Row>
    );
}

export default Welcome;