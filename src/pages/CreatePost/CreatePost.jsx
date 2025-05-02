import React from 'react'
import styles from './CreatePost.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuthValue} from '../../context/AuthContext'

const CreatePost = () => {

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.create_post}>

        <h2>Crie seu Post</h2>
        <p>Divida seu conhecimento, inspire outras pessoas e faça parte da conversa!</p>

        <form onSubmit={handleSubmit}>

          <label>
            <span>Título: </span>
            <input type="text" name="title" placeholder='Dê um título envolvente ao seu post' onChange={(e) => setTitle(e.target.value)} value={title} required />
          </label>

          <label>
            <span>Conteúdo: </span>
            <textarea name="content" placeholder='Dê um conteúdo envolvente ao seu post' onChange={(e) => setContent(e.target.value)} value={content} required />
          </label>

          <label>
            <span>Imagem (URL): </span>
            <input type="text" name="image" placeholder='Dê uma imagem ao seu post' onChange={(e) => setImage(e.target.value)} value={image} required />
          </label>

          <label>
            <span>Tags: </span>
            <input type="text" name="tags" placeholder='Digite as tags separadas por vírgula (ex: JavaScript, React, UI)' onChange={(e) => setTags(e.target.value)} value={tags} required />
          </label>

          <button className='btn'>Criar</button>

        </form>
    </div>
  )
}

export default CreatePost