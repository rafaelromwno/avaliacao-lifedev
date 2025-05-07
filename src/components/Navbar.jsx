import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom"
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'
import { useState } from 'react'
import { LuSquareMenu } from "react-icons/lu";

const Navbar = () => {

  const { user } = useAuthValue()
  const { logout } = useAuthentication()
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);



  return (
    <>
      <nav className={styles.navbar}>

          <div className={styles.top_bar}>
            <NavLink to="/" className={styles.brand}>
              <span>Mini</span>DevBlog
            </NavLink>
  
            <button className={styles.menu_btn} onClick={toggleMenu}>
              <LuSquareMenu />
            </button>
          </div>

          <ul className={`${styles.links_list} ${
          menuOpen ? styles.links_list_open : ""
          }`}>

          {!user && (
            <>
            
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Entrar
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Registrar
                </NavLink>
              </li>

            </>
          )}

          {user && (
            <>
              <li>
                <NavLink
                  to="/post/new"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Novo post
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Dashboard
                </NavLink>
              </li>
            </>
          )}

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>

        {user && (

          <li>
            <button onClick={logout} className={styles.exit}>Sair</button>
          </li>

        )}

        </ul>
        
      </nav>
    </>
  )
}

export default Navbar