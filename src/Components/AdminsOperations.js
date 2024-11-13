import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminsOperations() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: '', price: '', image: '', category: '',description: '' });

  const API_URL = 'https://mocki.io/v1/817b77d2-52d1-492b-8877-13141306875d'; //Update with your MockAPI endpoint

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get(API_URL)
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  };

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(fetchProducts)
      .catch(error => console.error("Delete error:", error));
  };

  const handleAdd = () => {
    axios.post(API_URL, newProduct)
      .then(() => {
        fetchProducts();
        setNewProduct({ title: '', price: '', image: '',  category: '',description: '' });
      })
      .catch(error => console.error("Add error:", error));
  };

  return (
    <div className="container home-style">
      <h2>Admin Panel - Manage Products</h2>
      <div>
        <input required className="form-control" placeholder="Title" value={newProduct.title} onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })} /> <br></br>
        <input required className="form-control" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} /><br></br>
        <input required className="form-control" placeholder="Image URL" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} /><br></br>
        <input required className="form-control" placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} /><br></br>
        <input required className="form-control" placeholder="Description" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} /><br></br>
        <button  className='btn btn-success' onClick={()=>handleAdd}> Add New Product</button>
      </div>

      <div className="row mt-4">
        {products.map(product => (
          <div key={product.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-12 px-md-10 d-md-flex justify-content-md-between mb-4">
            <div className="card home-card">
              <img src={product.image} alt={product.title} className="card-img-top home-card-img card-img-fixed "/>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5> 
                <Link className="btn btn-info mx-2" relative='path' to={`/Product_Details/${product.id}`}  state={{ product }} >View</Link>
                <Link className="btn btn-secondary mx-8" >Update</Link>
                <button className="btn btn-danger mx-2 " onClick={() => handleDelete(product.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminsOperations;
