import { Link } from "react-router-dom";
// import { useContext } from 'react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slices/products-slice';
import { addToCart } from '../rtk/slices/cart-slice';


function Product(props) {
    const { product } = props;
    const products=useSelector((state)=>state.cart);

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts());
    },[]);

    // const handleAddToCart = () => {
    //     dispatch(addToCart(product));
    // };

    return (
        <>

            <div className="card home-card" >
                <div className="card-body">
                    <img src={product.image} className="card-img-top home-card-img card-img-fixed "/>
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <Link to={`/Product_Details/${product.id}`} relative="path" state={{ product }} className="show-details">Show Details</Link>
                    {/* <Link to="/Cart" relative="path" className="Add-To-Cart" onClick={()=>dispatch(addToCart(product))}>Add To Cart</Link> */}
                    <button onClick={()=>dispatch(addToCart(product))} className="Add-To-Cart">Add To Cart</button>
                   
                </div>
            </div>


            {/* <div className=" container home-style">
       

                        <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 px-md-10 d-md-flex justify-content-md-between mb-4' key={product.id}>
                            <div className="card home-card" >
                                <div className="card-body">
                                    <img src={product.image} className="card-img-top home-card-img card-img-fixed " />
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <Link to={`/Product_Details/${product.id}`} relative="path" state={{ product }} className="show-details">Show Details</Link>
                                    <Link to="/Cart" relative="path" className="Add-To-Cart">Add To Cart</Link>

                                </div>
                            </div>

                        </div>



            </div> */}


        </>
    )
}
export default Product;