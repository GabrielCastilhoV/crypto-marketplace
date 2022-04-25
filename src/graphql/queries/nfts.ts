import { gql, useQuery } from '@apollo/client'
import { GetNftsQuery } from 'graphql/generated/schema'

export const GET_NFTs = gql`
  query GetNfts {
    nfts {
      id
      price
      image {
        url
      }
      owner {
        name
        image {
          url
        }
      }
      categories {
        name
      }
    }
  }
`

export function useQueryNfts() {
  return useQuery<GetNftsQuery>(GET_NFTs)
}
