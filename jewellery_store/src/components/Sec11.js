import React from 'react';
import Photo from './Photo';

const Sec11 = () => {
    return (
        <div className="container-fluid sec11">
            <div className="row d-flex justify-content-around">
                <div className="col-md-2 text-center">
                    <img src={Photo.img7} alt="error" className='hgf'/>
                </div>
                <div className="col-md-2 text-center">
                    <img src={Photo.img8} alt="error" />
                </div>
                <div className="col-md-2 text-center">
                    <img src={Photo.img9} alt="error" />
                </div>
                <div className="col-md-2 text-center">
                    <img src={Photo.img10} alt="error" />
                </div>
                <div className="col-md-2 text-center">
                    <img src={Photo.img11} alt="error" />
                </div>
            </div>
        </div>
    );
};

export default Sec11;
