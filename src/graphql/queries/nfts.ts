import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import {
  GetNftsQuery,
  GetNftsQueryVariables,
  NftWhereInput
} from 'graphql/generated/schema'

export const GET_NFTs = gql`
  query GetNfts($first: Int, $skip: Int, $where: NftWhereInput) {
    nfts(first: $first, skip: $skip, where: $where) {
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

    nftsConnection(first: $first, skip: $skip, where: $where) {
      pageInfo {
        hasNextPage
      }
    }
  }
`

export function useQueryNfts(
  options?: QueryHookOptions<GetNftsQuery, GetNftsQueryVariables>
) {
  return useQuery<GetNftsQuery, GetNftsQueryVariables>(GET_NFTs, options)
}
