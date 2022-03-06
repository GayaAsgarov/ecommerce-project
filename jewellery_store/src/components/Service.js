import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from './Header';

const Service = (props) => {
    return (
        <div className='col-sm-6 col-md-3 d-flex align-items-center service'>
            <div className="left">
                <i className={props.icon}></i>
            </div>
            <div className="right">
                <h4>{props.title}</h4>
                <h5>{props.info}</h5>
            </div>
        </div>
    )
}

export default Service
