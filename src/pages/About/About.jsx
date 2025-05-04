import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
        
        <h2>
            Sobre o Mini Dev <span>Blog</span>
        </h2>

        <p>
            Esse projeto consiste em um mini blog para desenvolvedores feito para uma avaliação da disciplina de Ddesenvolvimento Web III, onde o aluno deve desenvolver um blog com as tecnologias React e Firebase. O projeto foi desenvolvido por <strong>Rafael Romano Silva</strong>!
        </p>

    </div>
  )
}

export default About