import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthentication } from './hooks/useAuthentication'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import About from './pages/About/About'
import CreatePost from './pages/CreatePost/CreatePost'
import Dashboard from './pages/Dashboard/Dashboard'
import SearchResult from './pages/SearchResult/SearchResult'
import './App.css'
import { useEffect, useState } from 'react'
import PostView from './pages/PostView/PostView'
import EditPost from './pages/EditPost/EditPost'
import RecoverPassword from './pages/RecoverPassword/RecoverPassword'

function App() {

  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()
  const isLoading = user === undefined

  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
  
          <Navbar />
  
          <div className="container">
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<SearchResult />} />
              <Route path="/post/:id" element={<PostView />} />
              <Route path="/recuperar-senha" element={<RecoverPassword />} />

              <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />

              <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />              

              <Route path="/post/new" element={user ? <CreatePost /> : <Navigate to="/login" />} />

              <Route path="/post/edit/:id" element={user ? <EditPost /> : <Navigate to="/login" />} />

              <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
              
            </Routes>
          </div>
  
          <Footer />
  
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
