import styles from './Home.module.css'
import { useState } from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import PostCard from '../../components/PostCard'

const Home = () => {
  const [query, setQuery] = useState('')
  const {documents: posts, loading} = useFetchDocuments('posts')

  return (
    <>
      <div className={styles.home}>

          <h1>Veja os posts mais recentes</h1>
          <p>Fique por dentro do que está acontecendo no mundo da programação :D</p>

          <form className={styles.search_form}>
              <input 
              type="text"
              placeholder='Ou busque por tags...' 
              />
              <button className="btn btn-dark">Pesquisar</button>
          </form>

          {loading && <p>Carregando...</p>}

          {posts && posts.length === 0 && (
            <div className={styles.noposts}>
              
              <p>Não foram encontrados posts!</p>
             
            </div>
          )}

          {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}

      </div>
    </>
  )
}

export default Home