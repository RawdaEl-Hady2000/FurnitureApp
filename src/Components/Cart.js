import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../rtk/slices/cart-slice';
import { clear } from '../rtk/slices/cart-slice';

// import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import  {useState } from 'react';

function Cart() {
    // const [Products, setProducts] = useState([]);
    // const location = useLocation();
    // const { product } = location.state || {};
    // useEffect(() => {
    //     if (product) {
    //         setProducts((prevProducts) => [...prevProducts, product]);
    //     }
    // }, [product]);

    const cart=useSelector(state=>state.cart);
    console.log(cart);

    // using dispath to connect with cart.js with cart-slice to execute deleteFromCart when click on Remove button 
    const dispath=useDispatch();

    // to calculate total price, using reduce function 
    const totalPrice=cart.reduce((acc,product)=>{
        acc+=product.price * product.quantity;
        return acc;
    },0)

    return (
        <>
            <div className=" container add-to-cart-style">

                <h2 className='mt-10'> Cart Page</h2>
                
                <div className="row">

                    <div className="col-4">
                        <h6>Total Price: {totalPrice.toFixed(2)} $ </h6>
                    </div>

                    {/* <div className="col-4">
                        <button className='btn btn-primary' onClick={()=>dispath(clear())}> Clear Cart</button>
                    </div> */}

                </div>

                <div className="row">
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Product-ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Image</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {cart.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td scope="row">{product.title}</td>
                                    <td scope="row"><img src={product.image} style={{width:"100px",height:"100px"}}/></td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={()=>dispath(deleteFromCart(product))}> Remove </button>
                                        {/* <Link to={`/Product_Details/${product.id}`} relative="path" state={{ product }} className='btn btn-danger'> Back To Product </Link> */}
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Cart;