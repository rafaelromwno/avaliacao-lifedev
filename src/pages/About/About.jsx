import React from 'react'
import styles from './About.module.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={styles.about}>
        
        <h2>
            Sobre o Mini <span>Blog</span>
        </h2>

        <p>
            Esse projeto consiste em um mini blog para desenvolvedores feito para uma avaliação!
        </p>

        <Link to="/post/new" className="btn">
            Criar post
        </Link>

    </div>
  )
}

export default About