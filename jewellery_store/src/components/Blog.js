import React from 'react';
import Photo from './Photo';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="col-5 d-flex justify-content-between">
            <img src={Photo.img6} alt="error" />
            <div className="content">
                <h3>where does it come from?</h3>
                <p>chunks as necessary, making this the
                    first true generator on the internet. it
                    uses a dictionary of over 200 latin
                    words, combined with a handful of
                    model sentence
                </p>
                <Link to='/blogDetail'><button>read more</button></Link>
            </div>
        </div>
    );
};

export default Blog;
