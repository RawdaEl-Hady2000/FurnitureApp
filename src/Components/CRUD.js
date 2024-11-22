import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function CRUD() {

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({ id: '', title: '', image: '', price: '', category: '', description: '' });

    // Fetch products from the API
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://mocki.io/v1/817b77d2-52d1-492b-8877-13141306875d');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Add Product http://127.0.0.1:11666
    const addProduct = async () => {
        try {
            await axios.post('https://mocki.io/v1/817b77d2-52d1-492b-8877-13141306875d', product);
            Swal.fire('Success', 'Product added successfully', 'success');
            fetchProducts(); // Refresh the product list
        } catch (error) {
            Swal.fire('Error', 'Failed to add product', 'error');
        }
    };

    // Edit Product
    const editProduct = async () => {
        try {
            await axios.put(`https://mocki.io/v1/817b77d2-52d1-492b-8877-13141306875d/${product.id}`, product);
            Swal.fire('Success', 'Product updated successfully', 'success');
            fetchProducts(); // Refresh the product list
        } catch (error) {
            Swal.fire('Error', 'Failed to update product', 'error');
        }
    };

    // Delete Product
    const deleteProduct = async (id) => {
        try {
            await axios.delete(`https://mocki.io/v1/817b77d2-52d1-492b-8877-13141306875d/${id}`);
            Swal.fire('Success', 'Product deleted successfully', 'success');
            fetchProducts(); // Refresh the product list
        } catch (error) {
            Swal.fire('Error', 'Failed to delete product', 'error');
        }
    };


    // Handle form submission htmlFor adding or editing a product
    const handleSubmit = (e) => {
        e.preventDefault();
        if (product.id) {
            editProduct();
        } else {
            addProduct();
        }
    };

    // Set the product state when an edit button is clicked
    const handleEditClick = (prod) => {
        setProduct(prod);
    };

    return (
        <>
            <div className=" container home-style ms-md-inherit">
                <h2 className='mt-10 p-3  d-xl-flex justify-content-xl-center  d-lg-flex justify-content-lg-center  d-md-flex justify-content-md-center d-sm-flex justify-content-sm-start d-xs-flex justify-content-xs-start'>Operations Page For Admins Only</h2>
            </div>





            <div className="container container-crud ms-md-inherit">
                <div className="row ">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 px-md-10 d-md-flex justify-content-md-center ms-md-0 ms-sm-0 ms-xs-0  mb-4">
                        <div className="card add-product ">
                            <div className="card-body">
                                <h5 className="card-title"><u>Add Product</u></h5>
                                {/* form here */}
                                <form onSubmit={handleSubmit}>
                                    <label className="form-label">Product ID</label>
                                    <input type="number" className="form-control"
                                        required
                                        value={product.id}
                                        onChange={(e) => setProduct({ ...product, id: e.target.value })} />

                                    <label className="form-label">Product Title</label>
                                    <input type="text" className="form-control"
                                        required
                                        value={product.title}
                                        onChange={(e) => setProduct({ ...product, title: e.target.value })} />

                                    <label htmlFor="formFile" className="form-label">Product Image</label>
                                    <input className="form-control" type="file" id="formFile"
                                        required
                                        value={product.image}
                                        onChange={(e) => setProduct({ ...product, image: e.target.value })} />


                                    <label className="form-label">Price</label>
                                    <input type="number" className="form-control"
                                        required
                                        value={product.price}
                                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                                    />

                                    <label className="form-label">Category</label>
                                    <input className="form-control" type="text"
                                        required
                                        value={product.category}
                                        onChange={(e) => setProduct({ ...product, category: e.target.value })} />

                                    <label className="form-label">Descryption </label>
                                    <input className="form-control" type="text"
                                        required
                                        value={product.description}
                                        onChange={(e) => setProduct({ ...product, description: e.target.value })} />

                                    <br></br>
                                    <button className="btn btn-success" type="submit">
                                        {product.id ? 'Edit Product' : 'Add Product'}
                                    </button>
                                    <br></br>
                                    <br></br>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>


        </>
    )
}
export default CRUD;