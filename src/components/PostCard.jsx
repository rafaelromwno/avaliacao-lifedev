import React from 'react'
import styles from './PostCard.module.css'
import { Link } from 'react-router-dom'

const PostCard = ({ post }) => {
  return (
    
    <article className={styles.card}>

      <img src={post.image} alt={post.title} className={styles.image} />

      <header>

        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.author}>Por: {post.createdBy}</p>

      </header>

      <footer>

        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>

        <Link to={`/posts/${post.id}`} className='btn btn-outline'>
          Ver
        </Link>

      </footer>

    </article>

  )
}

export default PostCard