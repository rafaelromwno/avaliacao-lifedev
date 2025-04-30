import styles from './Home.module.css'

const Home = () => {
  return (
    <>
      <div className={styles.home}>
          <h1>Veja os posts mais recentes</h1>
          <form className={styles.search_form}>
              <input 
              type="text"
              placeholder='Ou busque por tags...' 
              />
              <button className="btn btn-dark">Pesquisar</button>
          </form>
      </div>
    </>
  )
}

export default Home