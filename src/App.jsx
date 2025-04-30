import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </div>

        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
