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
      <Footer
      email="refasetyagama@gmail.com"
      address="Ketintang, Gayungan, Surabaya"
      aboutText="InnoTees is a t-shirt design and printing platform that helps you realize your creative imagination. With InnoTees, every idea you have can be a unique and attractive t-shirt design."
      newestText="Stay Connected. Receive the latest news, events, and updates directly to your inbox."
      />
    </BrowserRouter>
  )
}

export default App
