import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CheckOut from './CheckOut';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import { CartContext } from './CartContext'
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <BrowserRouter>

      <CartContext.Provider value={{ cartItems, setCartItems }}>

        <nav>
          <Link to="/">首頁</Link>
          <Link to="/CheckOut">購物車</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/CheckOut" element={<CheckOut />} />

          <Route path="/product" element={<ProductDetail />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>

          <Route path="*" element={<p>找不到頁面</p>} />
        </Routes>

      </CartContext.Provider>

    </BrowserRouter>
  );
}

export default App;