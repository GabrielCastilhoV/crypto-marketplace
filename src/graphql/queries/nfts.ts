import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { initializeApollo } from 'utils/apollo'

import { GetNftsQuery, GetNftsQueryVariables } from 'graphql/generated/schema'

export const GET_NFTs = gql`
  query GetNfts($first: Int, $skip: Int, $where: NftWhereInput) {
    nfts(first: $first, skip: $skip, where: $where) {
      id
      name
      price
      description
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

export const BasicQueryNfts = async (variables?: GetNftsQueryVariables) => {
  const apolloClient = initializeApollo()

  const { data, loading } = await apolloClient.query<
    GetNftsQuery,
    GetNftsQueryVariables
  >({
    query: GET_NFTs,
    variables
  })

  return { data, loading }
}

export function useQueryNfts(
  options?: QueryHookOptions<GetNftsQuery, GetNftsQueryVariables>
) {
  return useQuery<GetNftsQuery, GetNftsQueryVariables>(GET_NFTs, options)
}
