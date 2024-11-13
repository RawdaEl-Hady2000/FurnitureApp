import React from 'react';
import { Link, useLocation } from 'react-router-dom';  // this is hook using in passing the data from , to components 
import { useParams } from 'react-router-dom'; // to take id for any product press on it

function Product_Details() {

    const location = useLocation();
    const { product } = location.state || {};
    const { product_id } = useParams();

    return (
        <>
            <div className='container container-xl container-lg container-md  container-sm container-xs  mx-md-10 mx-sm-0 ProductDetails-style'>
                <h2 className='m-80'>Product Details #00{product.id}</h2>
                <div className='row'>
                    <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12 mx-md-0 '>
                        <img src={product.image} alt="..." />
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 '>
                        <ul>
                            <li> <h6>Product ID : #00{product.id} </h6> </li>
                            <li> <h6>Product Price : {product.price} $</h6></li>
                            <li><h6 className="card-title">Product Title: {product.title}</h6> </li>
                            <li><h6 className="card-text">Product Category : {product.category}</h6></li>
                            <li><h6 className="card-text">Product Description : {product.description}</h6></li>
                        </ul>

                        <Link to="/" relative="path" className="back-to-home">Back To Home</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product_Details;