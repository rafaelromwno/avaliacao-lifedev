import React from 'react'
import styles from './Dashboard.module.css'
import NoPosts from '../../components/Dashboard/NoPosts'
import PostHeader from '../../components/Dashboard/PostHeader'
import PostRow from '../../components/Dashboard/PostRow'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useAuthValue } from '../../context/AuthContext'
import { useDeleteDocument } from '../../hooks/useDeleteDocument'

const Dashboard = () => {

  const { user } = useAuthValue()
  const uid = user.uid
  const { documents: posts } = useFetchDocuments('posts', null, uid)
  const hasPosts = posts?.length > 0
  const { deleteDocument } = useDeleteDocument('posts')

  return (
    <div className={styles.dashboard}>

      <h2>Dashboard</h2>
      <p>Gerencie suas publicações aqui!</p>

      {!hasPosts ? (
        <NoPosts />
      ) : (
        <>
          <PostHeader />
          {posts.map((post) => (
            <PostRow key={post.id} post={post} deleteDocument={deleteDocument} />
          ))}
        </>
      )}

    </div>
  )
}

export default Dashboard