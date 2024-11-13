import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slices/products-slice';
import { addToCart } from '../rtk/slices/cart-slice';



function ProductsList() {

    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch('https://mocki.io/v1/817b77d2-52d1-492b-8877-13141306875d')
    //         .then((res) => res.json())
    //         .then((data) => setProducts(data));
    // }, []);


    const products = useSelector((state) => state.products);
    console.log(products);

    // to use fetchProducts from products-slices to link this component with products-slices , by using Dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);




    return (
        <>
            <div className=" container home-style">
                <h2 className='mt-10'>Rokna Furniture's Products</h2>
                <div className='row'>
                    {products.map((product) => {
                        return (
                            <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 px-md-10 d-md-flex justify-content-md-between mb-4' key={product.id}>
                                {/* <Product product={product}/> */}
                                <div className="card home-card" >
                                    <div className="card-body">
                                        <img src={product.image} className="card-img-top home-card-img card-img-fixed " />
                                        <h5 className="card-title pt-3">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text">{product.price} $</p>
                                        <Link to={`/Product_Details/${product.id}`} relative="path" state={{ product }} className="show-details">Show Details</Link>
                                        <Link className="Add-To-Cart" onClick={()=>dispatch(addToCart(product))}>Add To Cart</Link>
                                        {/* <button onClick={()=>dispatch(addToCart(product))} className="Add-To-Cart">Add To Cart</button> */}

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* <div className='row mx-md-n5'>
                    {products.map((product) => {
                        return (
                            <>
                            <div className='col-3'>
                                
                            </div>
                                <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 px-md-10 d-md-flex justify-content-md-between mb-4'>
                                    <Product></Product>
                                </div>
                            </>
                        )
                    })}

                </div> */}


            </div>

        </>

    )
}
export default ProductsList;

// function ProductsList() {

//     const [Products, setProducts] = useState([]);
//     const product = useState({ id: '',title: '', price: '', image: '', description: '', category: '' });

//     useEffect(() => {
//         http://127.0.0.1:11666/db.json
//         http://localhost:5000/
//         http://localhost:14220/db.json.preview
//         http://localhost:5500/db.json.fullscreen
//         fetch('http://127.0.0.1:5500/db.json.fullscreen')
//             .then((res) => res.json())
//             .then((data) => setProducts(data))
//     }, []);

//     return (
//         <>
//             <div className=" container home-style">
//                 <h2 className='mt-10'>Rokna Furniture's Products</h2>

//                 <div className='row mx-md-n5'>
//                     {Products.map((product) => (
//                         <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 px-md-10 d-md-flex justify-content-md-between mb-4' key={product.id}>
//                             <div className="card">
//                                 <img src={product.image} className="card-img-top" alt="..."/>
//                                     <div className="card-body">
//                                         <h5 className="card-title">{product.title}</h5>
//                                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                         <Link to={`/Product_Details/${product.id}`} relative="path" state={{ product }} className="show-details">Show Details</Link>
//                                         <Link to="/Cart" relative="path"  className="Add-To-Cart">Add To Cart</Link>
//                                     </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>


//             </div>

//         </>

//     )
// }
// export default ProductsList;