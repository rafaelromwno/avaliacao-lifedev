import React from 'react'
import styles from './NotFound.module.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Página não encontrada</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  )
}

export default NotFound