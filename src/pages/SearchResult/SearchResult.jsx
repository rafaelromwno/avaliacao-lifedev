import React from 'react'
import styles from './SearchResult.module.css'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'
import { Link } from 'react-router-dom'
import PostCard from '../../components/PostCard'

const SearchResult = () => {


  const query = useQuery()
  const rawSearch = query.get('q') || ''
  const isTagSearch = rawSearch.includes(' ')
  const searchTags = isTagSearch ? rawSearch.split(',').map(tag => tag.trim()) : null
  const searchText = isTagSearch ? '' : rawSearch

  const { documents: posts, loading, error } = useFetchDocuments('posts', searchTags, null, searchText)

  if (loading) {
    return <div>Carregando...</div>
  }

  if (error) {
    return <div>Ocorreu um erro: {error.message}</div>
  }

  return (
    <div className={styles.resultsPage}>
      
      <header className={styles.resultsHeader}>
        <h1 className={styles.resultsTitle}>
          Resultados para: <span className={styles.searchQuery}>{searchText || searchTags}</span>
        </h1>
      </header>

      <main className={styles.resultsContent}>

        {posts && posts.length === 0 ? (
          <div className={styles.noPosts}>

            <p className={styles.noPostsMessage}>
              Não foram encontrados resultados para: <span className={styles.searchQuery}>{searchText || searchTags}</span>
            </p>


            <Link to="/" className='btn btn-dark'>
              Voltar
            </Link>
          </div>
        ) : (

          <div className={styles.postsGrid}>
            {posts && posts.map((post) => (
              <div key={post.id} className={styles.post}>
                
                <PostCard key={post.id} post={post} />

              </div>
            ))}
          </div>

        )}

      </main>


    </div>  
  )
}

export default SearchResult