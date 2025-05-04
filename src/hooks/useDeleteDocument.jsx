import { useRef, useEffect, useReducer } from "react"
import { db } from "../firebase/config"
import { doc, deleteDoc } from "firebase/firestore"

const initialState = {
    loading: false,
    error: null,
}

const deleteReducer = (state, action) => {

    switch (action.type) {

        case "LOADING":
        return { loading: true, error: null }

        case "DELETED_DOC":
        return { loading: false, error: null }
        
        case "ERROR":
        return { loading: false, error: action.payload }

        default:
        return state
    }
}

export const useDeleteDocument = (docCollection) => {

    const [response, dispatch] = useReducer(deleteReducer, initialState)
    const cancelled = useRef(false)

    const safeDispatch = (action) => {

        if (!cancelled.current) {
          dispatch(action)
        }

    }

    const deleteDocument = async (id) => {

        safeDispatch({ type: "LOADING" })
    
        try {

          await deleteDoc(doc(db, docCollection, id))

          safeDispatch({ type: "DELETED_DOC" })

        } catch (error) {

          safeDispatch({ type: "ERROR", payload: error.message })

        }
    }

    useEffect(() => {
        return () => {

          cancelled.current = true

        }
      }, [])

    return { deleteDocument, response }

}