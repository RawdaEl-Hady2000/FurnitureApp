// import logo from '../Images/logo.jpg.jpg'

// function Footer() {
//     return (
//         <>
//             <div id="footer_style">
             

//                 <div className="container d-flex flex-column vh-100 " id="footer-container">

//                     <footer className="text-center text-white" id="footer-background">

//                         <div className="container">

//                             <section className="mt-5">

//                                 <div className="row text-center d-flex justify-content-center pt-5">

//                                     <div className="col-md-2">
//                                         <h6 className="text-uppercase font-weight-bold">
//                                             <a href="#!" className="text-white">Who we are</a>
//                                         </h6>
//                                     </div>



//                                     <div className="col-md-2">
//                                         <h6 className="text-uppercase font-weight-bold">
//                                             <a href="#!" className="text-white">What we do</a>
//                                         </h6>
//                                     </div>


//                                     <div className="col-md-2">
//                                         <h6 className="text-uppercase font-weight-bold">
//                                             <a href="#!" className="text-white">Awards</a>
//                                         </h6>
//                                     </div>



//                                     <div className="col-md-2">
//                                         <h6 className="text-uppercase font-weight-bold">
//                                             <a href="#!" className="text-white">Need help?</a>
//                                         </h6>
//                                     </div>


//                                     <div className="col-md-2">
//                                         <h6 className="text-uppercase font-weight-bold">
//                                             <a href="#!" className="text-white">Contact</a>
//                                         </h6>
//                                     </div>

//                                 </div>

//                             </section>

//                             <hr className="my-5" />

                            



//                             <section className="text-center mb-5">
//                                 <a href="" className="text-white me-4">
//                                     <i className="fab fa-facebook-f"></i>
//                                 </a>
//                                 <a href="" className="text-white me-4">
//                                     <i className="fab fa-twitter"></i>
//                                 </a>
//                                 <a href="" className="text-white me-4">
//                                     <i className="fab fa-google"></i>
//                                 </a>
//                                 <a href="" className="text-white me-4">
//                                     <i className="fab fa-instagram"></i>
//                                 </a>
//                                 <a href="" className="text-white me-4">
//                                     <i className="fab fa-linkedin"></i>
//                                 </a>
//                                 <a href="" className="text-white me-4">
//                                     <i className="fab fa-github"></i>
//                                 </a>
//                             </section>

//                         </div>



                    

//                     </footer>

//                 </div>


//             </div>

//         </>
//     )


// }
// export default Footer;


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
