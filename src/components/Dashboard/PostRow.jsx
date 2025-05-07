import React from 'react'
import styles from '../../pages/Dashboard/Dashboard.module.css'
import { Link } from 'react-router-dom'

const PostRow = ({ post, deleteDocument }) => {

    const handleDelete = () => {

        const confirmed = window.confirm('Tem certeza que deseja excluir esta publicação?')

        if (confirmed) {
          deleteDocument(post.id)
        }
    }

  return (
    
    <div className={styles.post_row}>
        <p>{post.title}</p>
        <div className={styles.actions}>
            <Link to={`/post/${post.id}`} className="btn btn-outline">
                Ver
            </Link>
            <Link to={`/post/edit/${post.id}`} className="btn btn-outline">
                Editar
            </Link>
            <button
                onClick={handleDelete}
            >
                Excluir
            </button>
        </div>
    </div>

  )
}

export default PostRow