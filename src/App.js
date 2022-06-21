import React, { useState } from 'react'
//import { useSelector } from 'react-redux'
import './App.css';
import Header from './Header';
import Login from './Login';
import Checkout from './Checkout';
import { Routes, Route, Outlet } from 'react-router'
import ProductForm from './ProductForm';
import Products from './Products';

function App() {

  const [token] = useState(null);

  /*
  const loggedIn = useSelector(state => state.loggedIn)

          <Routes>
  {loggedIn ?
    <>
      <Route path="/products" element={<Product />} />
      <Route path="/create" element={<ProductForm />} />
      <Route path="/checkout" element={<Checkout />} />
    </>
    :
    <Route path='/*' element={<Login token={token} />} />
  }
</Routes>
<Outlet />*/

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="container">
        <Routes>
          <>
            <Route path='/products' element={<Products />} />
            <Route path="/create" element={<ProductForm />} />
            <Route path="/checkout" element={<Checkout />} />
          </>
          <Route path='/*' element={<Login token={token} />} />

        </Routes>
        <Outlet />

      </main>
    </div>
  );
}

export default App;
