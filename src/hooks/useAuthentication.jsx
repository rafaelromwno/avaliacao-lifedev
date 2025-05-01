import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
  } from 'firebase/auth'
  import { auth } from "../firebase/config"
  import { useState, useEffect } from "react"
  import { FirebaseError } from "firebase/app";
  
  export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [cancelled, setCancelled] = useState(false);

    function checkIfIsCancelled() {
      if (cancelled) {
        return;
      }
    }
  
    const createUser = async (data) => {
      checkIfIsCancelled();
  
      setLoading(true);
      
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
      
        await updateProfile(user, {
          displayName: data.displayName,
        });
      
        return user;
      } catch (error) {
        let systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
      
        if (error instanceof FirebaseError) {
          switch (error.code) {
            case "auth/email-already-in-use":
              systemErrorMessage = "E-mail já cadastrado.";
              break;
            case "auth/invalid-email":
              systemErrorMessage = "E-mail inválido.";
              break;
            case "auth/weak-password":
              systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
              break;
            case "auth/operation-not-allowed":
              systemErrorMessage = "Cadastro por e-mail/senha está desabilitado.";
              break;
            default:
              console.warn("Código de erro não tratado:", error.code);
          }
        }
      
        setLoading(false);
        console.error("Erro ao criar usuário:", error);
        setError(systemErrorMessage);
        return null;
      }
    };
  
    const logout = () => {
      checkIfIsCancelled();
  
      signOut(auth);
    };
  
    const login = async (data) => {
      checkIfIsCancelled();
  
      setLoading(true);
      setError(false);
  
      try {
        await signInWithEmailAndPassword(auth, data.email, data.password);
      } catch (error) {
        let systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
      
        if (error instanceof FirebaseError) {
          switch (error.code) {
            case "auth/user-not-found":
              systemErrorMessage = "Usuário não encontrado.";
              break;
            case "auth/wrong-password":
              systemErrorMessage = "Senha incorreta.";
              break;
            case "auth/invalid-email":
              systemErrorMessage = "E-mail inválido.";
              break;
            case "auth/invalid-credential":
              systemErrorMessage = "Credenciais inválidas. Verifique e tente novamente.";
              break;
            default:
              console.warn("Código de erro não tratado:", error.code);
          }
        }
      
        console.error("Erro capturado:", error);
        setError(systemErrorMessage);
      }
  
      setLoading(false);
    };
  
    useEffect(() => {
      return () => setCancelled(true);
    }, []);
  
    return {
      auth,
      createUser,
      error,
      logout,
      login,
      loading,
    };
  };