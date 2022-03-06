import React from 'react';
import Blog from './Blog';

const Sec10 = () => {
  return(
      <div className="container-fluid sec10">
        <div className="row">
          <h1>Latest Blog</h1>
        </div>
        <div className="row d-flex justify-content-around">
          <Blog />
          <Blog />
        </div>
      </div>
  );
};

export default Sec10;
