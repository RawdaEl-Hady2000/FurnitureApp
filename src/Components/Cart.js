import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../rtk/slices/cart-slice';
import { clear } from '../rtk/slices/cart-slice';
import { Link } from 'react-router-dom';


function Cart() {

    const cart = useSelector(state => state.cart);
    console.log(cart);

    // using dispath to connect with cart.js with cart-slice to execute deleteFromCart when click on Remove button 
    const dispath = useDispatch();

    // to calculate total price, using reduce function 
    const totalPrice = cart.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0)

    return (
        <>
            <div className=" container add-to-cart-style">

                <h2 className='mt-10'> Cart Page</h2>

                <div className="row">

                    <div className="col-4">
                        <h6>Total Price: {totalPrice.toFixed(2)} $ </h6>
                    </div>

                </div>

                <div className="row">
                    <table class="table table-hover table-dark center">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center">Product-ID</th>
                                <th scope="col" className="text-center">Title</th>
                                <th scope="col" className="text-center">Image</th>
                                <th scope="col" className="text-center">Price</th>
                                <th scope="col" className="text-center">Quantity</th>
                                <th scope="col" className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {cart.map((product) => (
                                <tr key={product.id}>
                                    <td className="text-center">{product.id}</td>
                                    <td className="text-center">{product.title}</td>
                                    <td className="text-center"><img src={product.image} style={{ width: "100px", height: "100px" }} /></td>
                                    <td className="text-center">{product.price}</td>
                                    <td className="text-center">{product.quantity}</td>
                                    <td className="text-center">
                                        <Link to={`/Product_Details/${product.id}`} relative="path" state={{ product }} className='btn btn-info mx-2'> Back To Product </Link>
                                        <button className='btn btn-danger' onClick={() => dispath(deleteFromCart(product))}> Remove </button>
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