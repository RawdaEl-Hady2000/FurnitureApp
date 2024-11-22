import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/rokna-logo-navbar-transparent-bg-removebg-preview.png';

import Home from './Home';


const Footer = () => {

    return (
        <footer className="footer bg-dark text-white py-4 fixed-footer">
            <div className="container text-center">
                <div className='row'>
                    <div className='col-3'>
                        <Link relative='path' to='/'> <img src={logo} alt="My Image" /> </Link>
                    </div>

                    <div className='col-6 m-auto'>
                        <p  className="list-inline-item">&copy; {new Date().getFullYear()} <Link className="text-white" to='/' >Rokna Furniture Company</Link>_by Rawda Elsawaf , All rights reserved.</p>
                    </div>

                    <div className='col-3 m-auto'>         
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="#" className="text-white">Facebook</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="text-white">Twitter</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="text-white">Tiktok</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="text-white">Instagram</a>
                                    </li>
                                </ul>
                            

                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
