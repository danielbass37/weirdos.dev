import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import './styles/App.css'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <Router>
      <div className='App'>
        <Navbar currentSlide={currentSlide} />
        <Routes>
          <Route
            path='/'
            element={<Home setCurrentSlide={setCurrentSlide} />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
