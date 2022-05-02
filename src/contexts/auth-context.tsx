import { createContext, useContext } from 'react'
import Router, { useRouter } from 'next/router'
import { setCookie, destroyCookie } from 'nookies'

type AuthContextData = {
  signIn: () => void
  signOut: () => void
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const router = useRouter()

  function signOut() {
    destroyCookie(undefined, '@nextauth.token')

    Router.push('/login')
  }

  function signIn() {
    const token = '123'

    try {
      setCookie(undefined, '@nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      })

      router.push('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('this hook must be used in a AuthContext')
  }

  return context
}
