import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom"
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'

const Navbar = () => {

  const { user } = useAuthValue()
  const { logout } = useAuthentication()


  return (
    <>
      <nav className={styles.navbar}>

        <ul className={styles.links_list}>
          
          <NavLink to="/" className={styles.brand}>
            <li><span>Mini</span>DevBlog</li>
          </NavLink>

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