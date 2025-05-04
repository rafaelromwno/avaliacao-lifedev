import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../pages/Dashboard/Dashboard.module.css'

const NoPosts = () => {
  return (
    
    <div className={styles.noposts}>
        <p>Publicações não encontradas!</p>
        <Link to="/post/new" className="btn">
            Criar Publicação
        </Link>
    </div>

  )
}

export default NoPosts