import { createContext, useContext, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { setCookie, destroyCookie, parseCookies } from 'nookies'

import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React } from '@web3-react/core'

type AuthContextData = {
  signIn: () => void
  signOut: () => void
  handleConnectWithMetaMask: () => void
  handleDisconnectFromMetaMask: () => void
  activeMetamask: boolean
  accountMetamask: string
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const router = useRouter()

  const { active, account, activate, deactivate } = useWeb3React()

  const accountMetamask =
    account &&
    account.substring(0, 5) +
      '...' +
      account.substring(account.length - 5, account.length)

  const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
  })

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      const cookies = parseCookies()
      const isWalletConnected = cookies['@metamask'] === 'true'

      if (isWalletConnected) {
        try {
          await activate(injected)
          setCookie(undefined, '@metamask', 'true', {
            maxAge: 60 * 60 * 24 * 30,
            path: '/'
          })

          router.push('/')
        } catch (error) {
          console.log(error)
        }
      }
    }

    connectWalletOnPageLoad()
  }, [])

  async function handleConnectWithMetaMask() {
    try {
      await activate(injected)

      setCookie(undefined, '@metamask', 'true', {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      })

      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  async function handleDisconnectFromMetaMask() {
    try {
      deactivate()

      destroyCookie(undefined, '@metamask')

      router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

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
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        handleConnectWithMetaMask,
        handleDisconnectFromMetaMask,
        activeMetamask: active,
        accountMetamask
      }}
    >
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
