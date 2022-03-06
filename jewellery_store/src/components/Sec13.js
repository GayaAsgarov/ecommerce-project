import React from 'react';
import Photo from './Photo';

const Sec13 = () => {
  return (
      <div className="sec13">
        <div className="container">
          <div className="row d-flex -justify-content-between">
            <div className="col-lg-4">
              <p>
              chunks as necessary, making 
              this the first true generator 
              on the internet. it uses a 
              dictionary of over 200 latin 
              words, combined with a handful
               of model sentence
              </p>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-around mid">
              <img src={Photo.img12} alt="error" />
              <img src={Photo.img13} alt="error" />
              <img src={Photo.img14} alt="error" />
              <img src={Photo.img15} alt="error" />
            </div>
            <div className="col-lg-3 d-flex align-items-center ">
              <ul className='d-flex justify-content-around'>
                <li><i className="fab fa-facebook-f"></i></li>
                <li className='mx-5'><i className="fab fa-twitter"></i></li>
                <li className='me-5'><i className="fab fa-google-plus-g"></i></li>
                <li><i className="fab fa-instagram"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Sec13;
