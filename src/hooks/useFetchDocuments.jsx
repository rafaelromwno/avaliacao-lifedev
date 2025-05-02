import { useState, useEffect } from "react"
import { db } from "../firebase/config"
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    where
} from "firebase/firestore"

export const useFetchDocuments = (docCollection, search = null, uid = null) => {

    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        let cancelled = false

        const collectionRef = collection(db, docCollection)

        let queryRef

        
        if (search) {

            queryRef = query(
            collectionRef,
            where("tags", "array-contains", search),
            orderBy("createAt", "desc")
            )

        } else if (uid) {

            queryRef = query(
            collectionRef,
            where("uid", "==", uid),
            orderBy("createAt", "desc")
            )

        } else {

            queryRef = query(collectionRef, orderBy("createAt", "desc"))
            
        }

        const unsubscribe = onSnapshot(
            queryRef,
            (snapshot) => {
              if (!cancelled) {
                const results = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data()
                }))
                setDocuments(results)
                setLoading(false)
              }
            },
            (err) => {
              console.error("Erro ao buscar documentos:", err)
              if (!cancelled) {
                setError("Houve um erro ao carregar os dados.")
                setLoading(false)
              }
            }
          )

          return () => {
            cancelled = true
            unsubscribe()
          }

    }, [docCollection, search, uid])

    return { documents, loading, error }
}