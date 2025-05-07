import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
  
    <footer className={styles.footer}>

        <div className={styles.footer_content}>

          <h3>Plataforma de Postagens para Desenvolvedores</h3>

          <p>Compartilhe aqui suas experiências de Desenvolvedor!</p>

        </div>
    
          <div className={styles.footer_bottom}>
            <p> MiniDevBlog 2025 &#169; Rafael</p>
          </div>
       

    </footer>
    
  )
}

export default Footer