import React from 'react';
import Photo from './Photo';

const Sec4 = () => {
    return (
        <div className="sec4" >
            <div className="row">
                <div className="col-5">
                    <div className="image-box">
                        <img src={Photo.img16} alt="error" />
                    </div>
                </div>
                <div className="col-5 col2nd">
                    <div className="image-box">
                        <img src={Photo.img17} alt="error" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sec4
