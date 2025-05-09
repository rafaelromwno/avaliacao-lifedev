import React from 'react'
import styles from './PostView.module.css'
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { Link } from 'react-router-dom'

const PostView = () => {

    const { id } = useParams()
    const { document: post } = useFetchDocument('posts', id)

  return (
    <>
        <article className={styles.postContainer}>
        {post && (
            <>
            <header className={styles.postHeader}>
                <h1 className={styles.postTitle}>{post.title}</h1>
                <figure className={styles.postImageWrapper}>
                <img src={post.image} alt={post.title} className={styles.postImage} />
                </figure>
            </header>

            <section className={styles.postBody}>
                <p>{post.content}</p>
            </section>

            {Array.isArray(post.tags) && post.tags.length > 0 && (
                <section className={styles.postTagsSection}>
                <h3 className={styles.tagsTitle}>Este post trata sobre:</h3>
                <div className={styles.tagsWrapper}>
                    {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                        #{tag} 
                    </span>
                    ))}
                </div>
                </section>
            )}

            </>
        )}
        </article>

        <div style={{ textAlign: 'center' }}>
            <Link to="/" className={`btn btn-dark ${styles.backButton}`}>
                Voltar
            </Link>
        </div>
    </>
    )
}

export default PostView