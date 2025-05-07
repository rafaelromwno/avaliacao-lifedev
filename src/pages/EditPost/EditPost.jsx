import React from 'react'
import styles from './EditPost.module.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useParams } from 'react-router-dom'

const EditPost = () => {

    const {id} = useParams()
    const {document: post} = useFetchDocument('posts', id)
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [content, setContent] = useState('')
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState('')
    const {user} = useAuthValue()
    const navigate = useNavigate()
    const { updateDocument, response} = useUpdateDocument('posts')

  useEffect(() => {

    if (!post) return
  
    const populateFormFields = ({ title, image, content, tags }) => {
      setTitle(title)
      setImage(image)
      setContent(content)
      setTags(tags.join(", "))
    }
  
    populateFormFields(post)

  }, [post])

  const handleSubmit = (e) => {

    e.preventDefault()
    setFormError('')

    if(!title || !image || !content || !tags) {
      setFormError('Por favor, preencha todos os campos!')
      return
    }

    try {

      new URL(image)
      
    } catch (error) {
      
      setFormError('A imagem precisa ser uma URL válida!')
      return
    }

    const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase())

    const post = {
      title,
      image,
      content,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    }

    console.log(tagsArray)
    console.log(post)

    updateDocument(id, post)  
    navigate("/")

  }

  return (
    <div className={styles.edit_post}>

        <h2>Edite sua publicação!</h2>

        { post && (
            <form onSubmit={handleSubmit}>

            <label>
                <span>Editando Publicação: {post.title}</span>
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

            <p className={styles.preview_title}>Pré visualização da imagem:</p>
            <img
              className={styles.image_preview}
              src={post.image}
              alt={post.title}
            />

            <label>
                <span>Tags: </span>
                <input type="text" name="tags" placeholder='Digite as tags separadas por vírgula (ex: JavaScript, React, UI)' onChange={(e) => setTags(e.target.value)} value={tags} required />
            </label>

            {!response.loading && <button className="btn">Editar</button>}
            {response.loading && (
                <button className="btn" disabled>
                Aguarde...
                </button>
            )}
            {(response.error || formError) && (
                <p className="error">{response.error || formError}</p>
            )}

            </form>
        )}
    </div>
  )
}

export default EditPost