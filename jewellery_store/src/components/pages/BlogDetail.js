import React from 'react';
import { Link } from 'react-router-dom';
import Photo from '../Photo';
import Sec12 from '../Sec12';
import Sec13 from '../Sec13';
import Sec14 from '../Sec14';
import { useEffect } from 'react';

const BlogDetail = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <>
      <div className="container-fluid blogDetail">
        <div className="top">
          <Link className='homelink' to="/">home</Link> / <span>where does it come from?</span>
        </div>
        <div className="row d-flex justify-content-around pt-5 pb-5">
          <div className="col-5">
            <img src={Photo.img6} alt="error" />
          </div>
          <div className="col-5">
            <h3>where does it come from?</h3>
            <div> by dixit shah <span className='text-white mx-2'>| </span>
              in fashion <span className='text-white mx-2'>| </span>
              views(17)</div>
            <p>
              lorem ipsum dolor sit amet, consectetur
              adipisicing elit, do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. ut enim adminim
              veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip commodo consequat. duis aute irure
              dolor in rep rehenderit. lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiumod tempor
              incididunt ut labore et dolore magna aliqua. lorem
              ipsum dolor sit amet, consectetur adipisicing elit,
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. lorem ipsum dolor sit amet, consectetur adipisicing
              elit, do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. ut enim adminim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip commodo consequat. duis aute
              irure dolor in rep rehenderit. lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiumod tempor incididunt
              ut labore et dolore magna aliqua. lorem ipsum dolor sit amet,
              consectetur adipisicing elit, do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. lorem ipsum dolor sit
              amet, consectetur adipisicing elit, do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. ut enim
              adminim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip commodo consequat. duis aute
              irure dolor in rep rehenderit. lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiumod tempor
              incididunt ut labore et dolore magna aliqua. lorem ipsum
              dolor sit amet, consectetur adipisicing elit, do eiusmod
              tempor cididunt ut labore et dolore magna aliqua. lorem
              ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. ut enim
              adminim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip commodo consequat. duis aute irure dolor in rep
              rehenderit. lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiumod tempor incididunt ut labore et dolore
              magna aliqua. lorem ipsum dolor sit amet, consectetur
              adipisicing elit, do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. lorem ipsum dolor sit
              amet, consectetur adipisicing elit, do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. ut enim
              adminim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip commodo consequat. duis
              aute irure dolor in rep rehenderit. lorem ipsum
              dolor sit amet, consectetur adipisicing elit, s
              ed do eiumod tempor incididunt ut labore et dolore
              magna aliqua. lorem ipsum dolor sit amet, consectetur
              adipisicing elit, do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. lorem ipsum dolor sit
              amet, consectetur adipisicing elit, do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. ut enim
              dminim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip commodo consequat. duis aute irure dolor
              in rep rehenderit. lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiumod tempor incididunt ut labore
              et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur
              adipisicing elit, do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <Sec12 />
      <Sec13 />
      <Sec14 />
    </>
  );
};

export default BlogDetail;
