import React from 'react';

function ProductDetails({ product, addToCart }) {
  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <img 
        src={product.image} 
        alt={product.name} 
        className="img-fluid mb-4" 
      />
      <p>{product.description}</p>
      <p><strong>Price: ${product.price}</strong></p>
      <button className="btn btn-success" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
