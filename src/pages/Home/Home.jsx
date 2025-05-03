import styles from './Home.module.css'
import { useState } from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import PostCard from '../../components/PostCard'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const {documents: posts, loading} = useFetchDocuments('posts')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query) {
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <>
      <div className={styles.home}>

          <h1>Veja os posts mais recentes</h1>
          <p>Fique por dentro do que está acontecendo no mundo da programação :D</p>

          <form className={styles.search_form} onSubmit={handleSubmit}>
              <input 
              type="text"
              placeholder='Ou busque por tags...'
              onChange={(e) => setQuery(e.target.value)}
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