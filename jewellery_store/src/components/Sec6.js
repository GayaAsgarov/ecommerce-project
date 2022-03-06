import React from 'react';
import Product from './Product';
import { dataProduct } from './dataProduct';
import { useState } from 'react';

const Sec6 = () => {
    const [products, setProducts] = useState(dataProduct);
    return (
        <div className="sec6">
            <div className="container">
                <h2>Featured Products</h2>     
                <div className="row">
                    {products.map((product) => {
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

export default Sec6;
