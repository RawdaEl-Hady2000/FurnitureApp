import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function AdminsOperations() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  const API_URL = 'https://672e8adf229a881691f05387.mockapi.io/furniture/api/products';

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get(API_URL)
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  };

  const handleAdd = () => {
    Swal.fire({
      title: `Are You Sure To ADD This Product?`,
      showCancelButton: true,
    }).then((result)=>{
      fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title,
          price: price,
          image: image,
          category: category,
          description: description,
        })
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          fetchProducts();
          setTitle('');
          setPrice('');
          setImage('');
          setCategory('');
          setDescription('');
        })
        .catch(error => console.error("Add error:", error));
    })

  };

  const handleDelete = (id) => {
    Swal.fire({
      title: `Are You Sure To Delete This Product?`,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${API_URL}/${id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            fetchProducts();
          })
          .catch(error => console.error("Delete error:", error));
      }
    });
  };
  const handleEdit = (product) => {
    setIsEditing(true);
    setEditProductId(product.id);
    setTitle(product.title);
    setPrice(product.price);
    setImage(product.image);
    setCategory(product.category);
    setDescription(product.description);
  };

  const handleUpdate = () => {
    if (!isEditing || !editProductId) return;
    Swal.fire({
      title: `Are You Sure To Update This Product?`,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${API_URL}/${editProductId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title,
            price,
            image,
            category,
            description,
          })
        })
        .then(() => {
          const updatedProducts = products.map(product =>
            product.id === editProductId ? { ...product, title, price, image, category, description } : product
          );
          setProducts(updatedProducts);
          resetForm();
        })
        .catch(error => console.error("Update error:", error));
      }
    });
  };

  const resetForm = () => {
    setTitle('');
    setPrice('');
    setImage('');
    setCategory('');
    setDescription('');
    setEditProductId(null);
    setIsEditing(false);
  };


  return (
    <div className="container home-style">
      <h2>Admin Panel - Manage Products</h2>
      <div>
        <input
          type='text'
          required
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type='number'
          required
          className="form-control"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        /><br />
        <input
          type="url"
          name="url"
          id="url"
          required
          className="form-control"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        /><br />
        <input
          type='text'
          required
          className="form-control"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        /><br />
        <input
          type='text'
          required
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /><br />

         {isEditing ? (
          <button className='btn btn-secondary' onClick={handleUpdate}>Update Product</button>
        ) : (
          <button className='btn btn-success' onClick={handleAdd}>Add New Product</button>
        )}
      </div>

      <div className="row mt-4">
        {products.map(product => (
          <div key={product.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-12 px-md-10 d-md-flex justify-content-md-between mb-4">
            <div className="card home-card">
              <img src={product.image} alt={product.title} className="card-img-top home-card-img card-img-fixed" />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <Link className="btn btn-info mx-2" to={`/Product_Details/${product.id}`} state={{ product }}>View</Link>
                <button className="btn btn-secondary mx-8" onClick={() => handleEdit(product)}>Update</button>
                <button className="btn btn-danger mx-2" onClick={() => handleDelete(product.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminsOperations;
