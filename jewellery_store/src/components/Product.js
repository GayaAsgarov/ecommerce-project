import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';


const Product = (props) => {
    const {addItem} = useCart();

    return (
        <div className=" col-md-6 col-lg-4 col-xl-3">
            <div className={`image ${props.image}`}>
                <span>new</span>
                <div className="unvisible">
                    <div onClick={()=>addItem(props.item,1)}><i className="fas fa-shopping-cart"></i></div>
                    <div className='eye'><i className="fas fa-eye"></i></div>
                </div>
            </div>
            <p className='mt-3'>{props.desc}</p>
            <div className="bottom">
                <h5>£{props.price}</h5>
                <div className="colors">
                    <div className={props.firstColor}></div>
                    <div className={props.secondColor}></div>
                </div>
            </div>
            <Link to={`/product/${props.id}`} className='detailLink'>More Details</Link>
        </div>



    );
};

export default Product;
