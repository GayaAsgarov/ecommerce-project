import React from 'react';
import Product from './Product';
import { dataProduct } from './dataProduct';
import { useState } from 'react';
import { useEffect } from 'react';

const Sec8 = () => {
    const [products, setProducts] = useState([]);
    const newProducts = [];
    newProducts.push(dataProduct[4]);
    newProducts.push(dataProduct[0]);
    newProducts.push(dataProduct[4]);
    newProducts.push(dataProduct[0]);

    useEffect(() => {
        setProducts(newProducts);
    }, []);

    return (
        <div className="sec6">
            <div className="container">
                <h2>Special Product</h2>
                <div className="row">
                    {newProducts.map((product) => {
                        return (
                            <Product key={product.id}
                                desc={product.title}
                                price={product.price}
                                firstColor={`left${product.id}`}
                                secondColor={`right${product.id}`}
                                image={`image${product.id}`}
                                id={product.id}
                                item={product}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Sec8;
