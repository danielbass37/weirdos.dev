import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Conferences from './pages/Conferences'
import Home from './pages/Home'
import PaidAdvertising from './pages/PaidAdvertising'
import ProductLaunches from './pages/ProductLaunches'
import './styles/App.css'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <Router>
      <div className="App">
        <Navbar currentSlide={currentSlide} />
        <Routes>
          <Route path="/" element={<Home setCurrentSlide={setCurrentSlide} />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/product-launches" element={<ProductLaunches />} />
          <Route path="/paid-advertising" element={<PaidAdvertising />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
