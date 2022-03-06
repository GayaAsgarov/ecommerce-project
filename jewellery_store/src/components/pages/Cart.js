import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Sec13 from '../Sec13';
import Sec14 from '../Sec14';


const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();


  const empty = () => {
    return (
      <tr>
        <td>there are no more items in your cart</td>
      </tr>
    );
  }



  return (
    <>
      <div className="cart">
        <div className='homeBox'>
          <Link to="/" className='text-decoration-none homelink'>Home</Link>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 mb-5">
              <div className="top">
                Diamond
              </div>
              <img src="https://demo.templatetrend.com/prestashop/PRS385_3/modules/ttleftbannerblock/views/img/leftbanner1.jpg" alt="error" />
            </div>
            <div className="col-4 table">
              <table>
                <tbody>
                  <tr>
                    <th>shopping cart</th>
                  </tr>
                  {(isEmpty) ? empty() : items.map((item) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <img src={item.imageURL} alt="error" />
                          </td>
                          <td>
                            <Link to={`/product/${item.id}`} className='title'>{item.title}</Link> <br /> £{item.price}
                          </td>
                          <td>
                            {item.quantity}
                          </td>
                          <td>
                            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                          </td>
                          <td>
                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                          </td>
                          <td>£{parseFloat((item.quantity * item.price).toFixed(2))}</td>
                          <td><button onClick={() => removeItem(item.id)}><i className="fas fa-trash"></i></button></td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="col-4 total">
              <div className="boxtotal">
                <table>
                  <tbody>
                    <tr>
                      <td>{totalItems} items</td>
                      <td>£{parseFloat(cartTotal.toFixed(2))}</td>
                    </tr>
                    <tr>
                      <td>shipping</td>
                      <td>free</td>
                    </tr>
                    <tr>
                      <td>total (tax incl.)</td>
                      <td>£{parseFloat(cartTotal.toFixed(2))}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sec13 />
      <Sec14 />
    </>
  );
};

export default Cart;
