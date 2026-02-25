import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'

import App from './App.jsx'
import ProductPg from './ProductPg.jsx'
import CategoryPg from './CategoryPg.jsx'
import { CartPg } from './CartPg.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/categories" element={<CategoryPg />} />
        <Route path="/product" element={<ProductPg />} />
        <Route path="/cart" element={<CartPg />} />
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
