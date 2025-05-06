import React from 'react'
import styles from './RecoverPassword.module.css'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useState } from 'react'

const RecoverPassword = () => {

    const [resetEmail, setResetEmail] = useState("")
    const [resetMessage, setResetMessage] = useState("")
    const [error, setError] = useState("")
    const { resetPassword, error: authError } = useAuthentication()

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const handleResetPassword = async (e) => {

        e.preventDefault()
        setResetMessage("")
        setError("")
        
        if (!resetEmail) {

            setError("Por favor, informe um e-mail para recuperação.")

            return
        }

        if (!isValidEmail(resetEmail)) {

            setError("Formato de e-mail inválido.")
            
            return
        }
        
        try {

          await resetPassword(resetEmail)
          setResetMessage("E-mail de recuperação enviado com sucesso.")
          setResetEmail("")

        } catch (err) {

          console.error("Erro ao enviar e-mail de recuperação:", err)
          setError("Ocorreu um erro ao enviar o e-mail de recuperação.")

        }
    }

  return (
    
    <form onSubmit={handleResetPassword} className={styles.resetForm}>

        <h2>Recuperar Senha</h2>

        <label>
            <span>E-mail de recuperação:</span>
            <input
                type='email'
                name='resetEmail'
                placeholder='Digite seu e-mail'
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
            />
        </label>

        <button className='btn' type='submit'>Enviar link</button>

        {resetMessage && <p className={styles.success}>{resetMessage}</p>}
        {error && <p className={styles.error}>{error}</p>}

    </form>

  )
}

export default RecoverPassword