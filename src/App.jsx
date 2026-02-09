import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home.jsx'
import Products from './Pages/Products/Products.jsx'
import Testimonials from './Pages/Testimonials/Testimonials.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
