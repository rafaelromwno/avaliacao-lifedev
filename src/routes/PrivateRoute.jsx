import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthentication } from '../hooks/useAuthentication'

const PrivateRoute = ({ children }) => {

    const { user } = useAuthentication()

    if (!user) {

        return <Navigate to="/login" />

    }

  return children
}

export default PrivateRoute