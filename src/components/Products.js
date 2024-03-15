

import React, { useState } from 'react';
import './styles.css'; // Import your custom styles

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", category: "Category 1", price: 10, quantity: 100 },
    { id: 2, name: "Product 2", category: "Category 2", price: 20, quantity: 50 }
  ]);

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    quantity: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    if (formData.id) {
      // Edit existing product
      const updatedProducts = products.map(product => {
        if (product.id === formData.id) {
          return { ...product, ...formData };
        }
        return product;
      });
      setProducts(updatedProducts);
    } else {
      // Add new product
      const newProduct = {
        id: products.length + 1,
        name: formData.name,
        category: formData.category,
        price: formData.price,
        quantity: formData.quantity
      };
      setProducts([...products, newProduct]);
    }
    setFormData({ id: '', name: '', category: '', price: '', quantity: '' });
  };

  const handleEditProduct = (id) => {
    const productToEdit = products.find(product => product.id === id);
    setFormData(productToEdit);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <h1>Products Management</h1>
      {/* Product Form */}
      <input class='a' type="hidden" name="id" value={formData.id} />
      <input class= 'a' type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Product Name" />
      <input class= 'a' type="text" name="category" value={formData.category} onChange={handleInputChange} placeholder="Category" />
      <input class= 'a' type="number" name="price" value={formData.price} onChange={handleInputChange} placeholder="Price" />
      <input class= 'a' type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} placeholder="Quantity" />
      <button id="btn" onClick={handleAddProduct}>{formData.id ? 'Update Product' : 'Add Product'}</button>

      {/* Table of products */}
      <table className="products-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.quantity} units</td>
              <td>
                <button className='edit-btn' onClick={() => handleEditProduct(product.id)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;


