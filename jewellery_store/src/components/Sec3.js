import React from 'react';
import Service from './Service';

const Sec3 = () => {
    return (
        <div className="sec3 d-flex justify-content-center">
            <div className='container d-flex justify-content-center row'>
                <Service icon="fas fa-truck"
                    title="free shipping" info="on order cver 100$" />
                <Service icon="fas fa-phone-alt"
                    title="support online" info="call:(123) 123 444 555" />
                <Service icon="fas fa-gift"
                    title="special gift" info="special gift for member" />
                <Service icon="far fa-credit-card"
                    title="security payment" info="venaim consequeter frenk furtre" />
            </div>
        </div>
    )
}

export default Sec3
