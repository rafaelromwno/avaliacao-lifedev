import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>

        <ul className={styles.links_list}>
          
          <NavLink to="/" className={styles.brand} activeClassName={styles.active}>
            <li><span>Mini</span>DevBlog</li>
          </NavLink>

          <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>
            <li>Login</li>
          </NavLink>

          <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : "")}>
            <li>Register</li>
          </NavLink>

          <button className={styles.exit}>Exit</button>

        </ul>
        
      </nav>
    </>
  )
}

export default Navbar