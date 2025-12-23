import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'

import Docs from './docs/docs.jsx'
import App from './App.jsx'
import ProductPg from './ProductPg.jsx'

function RedirectToDocs() {
  const { page } = useParams();
  return <Navigate to={`/docs/${page}`} replace />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product" element={<ProductPg />} />
        <Route path="/docs/*" element={<Docs />} />
        <Route path="/:page" element={<RedirectToDocs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
