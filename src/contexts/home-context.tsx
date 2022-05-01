import { createContext, useContext, useEffect, useState } from 'react'

import { initializeApollo } from 'utils/apollo'

import { GET_NFTs, useQueryCategories } from 'graphql/queries'
import {
  GetNftsQuery,
  GetNftsQueryVariables,
  GetAllCategoriesQuery
} from 'graphql/generated/schema'

type HomeContextData = {
  nfts: GetNftsQuery['nfts']
  isLoading: boolean
  categories: GetAllCategoriesQuery['categories']
  setAllCategories: React.Dispatch<React.SetStateAction<string>>
  setTextFilter: React.Dispatch<React.SetStateAction<string>>
}

export const HomeContext = createContext({} as HomeContextData)

export const HomeProvider: React.FC = ({ children }) => {
  const [allCategories, setAllCategories] = useState<string>()
  const [nfts, setNfts] = useState<GetNftsQuery>()
  const [textFilter, setTextFilter] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const { data: categories } = useQueryCategories({
    notifyOnNetworkStatusChange: true
  })

  const whereClause = {
    AND: [
      { categories_some: { name_contains: allCategories } },
      {
        OR: [
          { price_contains: textFilter },
          {
            owner: {
              name_contains: textFilter
            }
          }
        ]
      }
    ]
  }

  const apolloClient = initializeApollo()

  useEffect(() => {
    async function getAllCategories() {
      setIsLoading(true)

      const { data } = await apolloClient.query<
        GetNftsQuery,
        GetNftsQueryVariables
      >({
        query: GET_NFTs,
        notifyOnNetworkStatusChange: true,
        variables: {
          where: whereClause
        }
      })

      setNfts(data)
      setIsLoading(false)
    }
    getAllCategories()
  }, [allCategories, textFilter])

  return (
    <HomeContext.Provider
      value={{
        isLoading,
        nfts: nfts?.nfts,
        categories: categories?.categories,
        setAllCategories,
        setTextFilter
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}

export const useHomeContext = () => {
  const context = useContext(HomeContext)

  if (!context) {
    throw new Error('this hook must be used in a HomeProvider')
  }

  return context
}
