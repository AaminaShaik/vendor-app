import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [page, setPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert('Product added to cart!');
  };

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === 'home' && <ProductList setPage={setPage} setSelectedProduct={setSelectedProduct} />}
      {page === 'product' && selectedProduct && <ProductDetails product={selectedProduct} addToCart={addToCart} />}
      {page === 'cart' && <Cart cart={cart} />}
      {page === 'login' && <Login />}
      {page === 'register' && <Register />}
    </div>
  );
}

export default App;
