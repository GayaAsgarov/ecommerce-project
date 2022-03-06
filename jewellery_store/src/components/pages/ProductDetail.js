import React, { useState } from 'react';
import { dataProduct } from '../dataProduct';
import { useParams, Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Sec8 from '../Sec8';
import Sec12 from '../Sec12';
import { useEffect } from 'react';
import Sec13 from '../Sec13';
import Sec14 from '../Sec14';

const ProductDetail = () => {
  const [count, setCount] = useState(1);
  let { id } = useParams();

  const {addItem} = useCart();

  const addOne = (count) => {
    setCount(count + 1);
  }
  
  useEffect(()=>{
    window.scrollTo(0,0);
  })

  const subOne = (count) => {
    if (count - 1 > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
    <div className='productDetail'>
      <div className="row links-container">
        <div className='links'>
          <Link to="/" className='homeLink'>home</Link>/<span>{dataProduct[id - 1].title}</span>
        </div>
      </div>
      <div className="row row1 w-100 d-flex justify-content-around pb-1">
        <div className="col-6">
          <img src={dataProduct[id - 1].imageURL} alt="error" />
        </div>
        <div className="col-6">
          <h1>{dataProduct[id - 1].title}</h1>
          <h5>£{dataProduct[id - 1].price}<span>tax included</span></h5>
          <p>nor again is there anyone who loves or pursues or desires to
            obtain pain of itself, because it is pain, but because
            occasionally circumstances occur in which toil and pain can
            procure him some great pleasure. to take a trivial example,
            which of us ever undertakes laborious physical exercise, except
            to obtain some advantage from it?
          </p>
          <div className="row row2">
            <div className="col-1">
              <h6 className='greycolor'>quantity</h6>
              <div className="box text-white">
                {count}
              </div>
            </div>
            <div className="col-1 arrows d-flex flex-column align-items-center">
              <div className="up" onClick={() => addOne(count)}><i className="fas fa-chevron-up"></i></div>
              <div className="down" onClick={() => subOne(count)}><i className="fas fa-chevron-down"></i></div>
            </div>
            <div className="col-3 addbtn">
              <button onClick={()=>addItem(dataProduct[id-1],count)}>add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Sec8 />
    <Sec12 />
    <Sec13 />
    <Sec14 />
    </>
  );
};

export default ProductDetail;
