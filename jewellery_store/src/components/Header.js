import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Photo from './Photo';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={Photo.img1} alt="error" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Earings
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="row mx-auto">
                                        <div className="col-4">
                                            <h3><a href="#" className="text-white">Necklaces</a></h3>
                                            <h5><a href="#" className="text-white">Bracelets</a></h5>
                                            <h5><a href="#" className="text-white">Diamond</a></h5>
                                            <h5><a href="#" className="text-white">Rings</a></h5>
                                            <h5><a href="#" className="text-white">Designers</a></h5>
                                        </div>
                                        <div className="col-4">
                                            <h3><a href="#" className="text-white">Earings</a></h3>
                                            <h5><a href="#" className="text-white">Necklaces</a></h5>
                                            <h5><a href="#" className="text-white">Silver Rings</a></h5>
                                            <h5><a href="#" className="text-white">Gold Ring</a></h5>
                                            <h5><a href="#" className="text-white">Handbags</a></h5>
                                        </div>
                                        <div className="col-4">
                                            <h3><a href="#" className="text-white">Ankels</a></h3>
                                            <h5><a href="#" className="text-white">Earings</a></h5>
                                            <h5><a href="#" className="text-white">Necklaces</a></h5>
                                            <h5><a href="#" className="text-white">Bracelets</a></h5>
                                            <h5><a href="#" className="text-white">Ring</a></h5>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="#">Bracelets</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white my-link" href="#">Diamond</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Rings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Ankels</a>
                            </li>
                        </ul>
                        <form className="d-flex align-items-center">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fas fa-search"></i></button>
                            </div>
                            <div className="user icon">
                                <i className="far fa-user"></i>
                            </div>
                            <div className="bag icon">
                                <Link to="/cart" className='carticon'><i className="fas fa-shopping-bag"></i></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
