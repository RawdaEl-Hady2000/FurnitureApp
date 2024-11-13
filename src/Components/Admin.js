import React, { useState } from 'react';
import { Form, Input } from "reactstrap";
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";

function Admin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // to enter the user to CRUD page if the admin 


    // Email & Pass are Constants , they are static values
    const staticEmail = 'roknastore@gmail.com';
    const staticPassword = '123456';

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the email or password fields are empty
        if (!email || !password) {
            Swal.fire({
                icon: 'warning',
                title: 'Incomplete Form',
                text: 'Please fill the inputs.',
            });
            return; // Stop further execution if fields are empty
        }


        if (email === staticEmail && password === staticPassword) {
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'Welcome, Admin!',
            })
                .then(() => {
                    navigate('/Admins_Operations');
                    // navigate('/crud');
                });
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Invalid email or password. Please try again.',
            }).then(() => {
                navigate('/');
            });
        }
    }

    return (
        <>
            <div className=" container home-style ">
                <h2 className='mt-10 d-flex justify-content-center'>Admin Page</h2>
                <div className="row d-flex justify-content-center my-20">
                    <div className="col-8">
                        <div className="form-container rounded-start border shadow-lg border-1 p-3 mb-5 bg-body rounded review-form">
                            <div className='d-flex justify-content-center'>
                                {/* <img src='https://www.creativefabrica.com/wp-content/uploads/2021/04/04/Verified-account-icon-Graphics-10369166-1-1-580x386.jpg' className='rounded-circle ' width="300" height="200"></img> */}
                                {/* <img src='https://www.shareicon.net/data/2016/07/11/589479_admin_256x256.png' className='rounded-circle ' width="150" height="150"></img> */}
                                <img src='https://www.creativefabrica.com/wp-content/uploads/2021/08/04/User-Login-Icon-Graphics-15483973-1-1-580x374.jpg' className='rounded-circle img-admin' width="300" height="200"></img>
                                {/* <img src='https://www.creativefabrica.com/wp-content/uploads/2021/03/30/Business-person-icon-Graphics-10117439-1-1-580x386.jpg' className='rounded-circle ' width="230" height="150"></img> */}
                            </div>
                            <Form className="mt-10" onSubmit={handleSubmit}>
                                <Input
                                    required
                                    className="form-control" type="text"
                                    placeholder="Enter admin email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                <br></br>
                                <Input
                                    required
                                    className="form-control" type="password"
                                    placeholder="Enter admin password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                <br></br>

                                <div className='col p-6 form-group d-flex justify-content-end m-auto'>
                                    <button type="submit" className="btn btn-success form-group mx-2">
                                        Submit
                                    </button>

                                    <Link to="/" relative="path" type="submit" className="btn btn-secondary" >
                                        Cancel
                                    </Link>
                                </div>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Admin;