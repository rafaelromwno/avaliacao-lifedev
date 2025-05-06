import styles from './Login.module.css'
import { useEffect, useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { login, loginWithGoogle, error: authError, loading } = useAuthentication()

    const handleSubmit = async (e) => {

        e.preventDefault()

        setError("")
        const user = {
            email,
            password,
        }

        const res = await login(user)

        console.log(res)
    }

    const handleGoogleLogin = async () => {

        const user = await loginWithGoogle()

        if (user) {
    
          console.log('Usuário logado com Google:', user)
          navigate('/')
    
        }
    }

    useEffect(() => {
        console.log(authError)
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <div className={styles.login}>
            <h1>Entrar</h1>
            <p>Faça login em nossa plataforma de desenvolvedores</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>E-mail: </span>
                    <input
                        type='email'
                        name='email'
                        required
                        placeholder='E-mail do usuário'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>Senha: </span>
                    <input
                        type='password'
                        name='password'
                        required
                        placeholder='Insira sua senha'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </label>

                <Link to="/recuperar-senha" className={styles.link} >
                    Esqueceu a senha?
                </Link>

                {!loading && <button className='btn'>Entrar</button>}
                {loading && <button className='btn' disabled>Aguarde...</button>}

                <p className={styles.divider}>OU</p>

                <button onClick={handleGoogleLogin} disabled={loading} className={styles.googleBtn}>
                    <FcGoogle size={20} /> Entrar com Google
                </button>

                {error && <p className='error'>{error}</p>}              

            </form>
        </div>
    )
}
export default Login