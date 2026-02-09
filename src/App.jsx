import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home.jsx'
import Products from './Pages/Products/Products.jsx'
import Testimonials from './Pages/Testimonials/Testimonials.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
