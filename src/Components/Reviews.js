import Carousel from 'react-bootstrap/Carousel';
import feedback1 from '../Images/feedback1.jpg';
import feedback2 from '../Images/feedback2.jpg';
import feedback3 from '../Images/feedback3.jpg';
import feedback4 from '../Images/feedback4.jpg';
// import logo from '../Images/business-review.jpg';
import logo from '../Images/reviewsImg.jpg';
import { Link } from 'react-router-dom';
import Home from './Home';
import React, { useState } from "react";
import Stars from './Stars';
import { Form, Input } from "reactstrap";
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

function Reviews() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [reviews, setReviews] = useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangeReview = (e) => {
        setReviews(e.target.value);
    };
    const onSubmit = (e) => {

        e.preventDefault();
        console.log("Form Submitted");
        console.log("Email :", email);
        console.log("Password :", password);
        console.log("Review :", reviews);

        // Clear the form fields after submitting
        setEmail('');
        setPassword('');
        setReviews('');

        // Save to localStorage
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("review", reviews);

        //Alert after submitted form
        Swal.fire({
            title: "Form Submitted",
            text: "You clicked the button!",
            icon: "success"
        });
    };

    const dontSubmit = (e) => {
        e.preventDefault();
        console.log("Don't submit this");
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, canceled it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Cancled!",
                    text: "Your file has been canceled.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <>

            <div className='container rounded-start border border-1 shadow-lg p-3 mb-5 bg-body rounded business-review'>
                <div className='row'>
                    <div className='col-7'>
                        <h1>Why are reviews crucial for your business?</h1>
                        <ul>
                            <li><strong>Social proof</strong>: Positive reviews instantly build trust with potential customers.</li>
                            <li className='style-listing' aria-level="1"><strong>Increase conversions</strong>: More reviews lead to more conversions and sales through your website (and other marketing and sales channels).</li>
                            <li className='style-listing' aria-level="1"><strong>Build customer loyalty</strong>: Engaged customers who leave feedback tend to be more loyal.</li>
                            <li className='style-listing' aria-level="1"><strong>Enhance Customer Engagement</strong>: Responding to reviews, whether positive or negative, shows customers that you value their opinions, fostering a sense of community and loyalty.</li>
                            <li className='style-listing' aria-level="1"><strong>Aid in Product and Service Improvement</strong>:   Negative reviews can be used constructively to understand customer pain points, driving meaningful improvements in your offerings.</li>
                        </ul>
                    </div>
                    <div className='col-5 d-none d-sm-none d-md-none d-lg-block d-xl-block '>
                        <img src={logo} width='90%'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
                {/* <div className='row'> */}
                {/* <div className='col'> */}
                <Carousel fade className='slider  rounded-start border border-1 shadow-lg p-3 mb-5 bg-body rounded'>
                    <Carousel.Item className=" d-flex justify-content-center ">
                        <img src={feedback1} text="First slide" />
                        <img src={feedback4} text="First slide" />
                        <img src={feedback3} text="First slide" />
                    </Carousel.Item>
                </Carousel>
                {/* </div> */}
                {/* </div> */}
            </div>

            <div className='container rounded-start border  border-1 shadow-lg p-3 mb-5 bg-body rounded review-form'>
                <div className='row'>
                    <div className='col'>
                        <h3> If you want to add your review , please fill the form ..</h3>

                        <div className="form-container">
                            <Stars />
                            <Form onSubmit={onSubmit} >
                                <Input
                                    required
                                    className="form-control" type="text"
                                    placeholder="Enter you email"
                                    value={email}
                                    onChange={onChangeEmail} />
<br></br>
                                <Input
                                    required
                                    className="form-control" type="password"
                                    placeholder="Enter you password"
                                    value={password}
                                    onChange={onChangePassword} />
<br></br>
                                <Input
                                    required
                                    className="form-control" type="text"
                                    placeholder="Enter you review"
                                    value={reviews}
                                    onChange={onChangeReview} />
<br></br>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col p-6 form-group d-flex justify-content-end m-auto'>
                                            <Button type="submit" className="btn btn-primary form-group mx-2">
                                                Submit
                                            </Button>

                                            <Button type="submit" className="btn btn-secondary" onClick={dontSubmit}>
                                                Cancel
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                            </Form>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Reviews;