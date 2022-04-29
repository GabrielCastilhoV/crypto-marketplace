import { gql, useQuery, QueryHookOptions } from '@apollo/client'
import { GetAllCategoriesQuery } from 'graphql/generated/schema'

export const GET_CATEGORIES = gql`
  query GetAllCategories {
    categories {
      name
    }
  }
`

export function useQueryCategories(
  options?: QueryHookOptions<GetAllCategoriesQuery>
) {
  return useQuery<GetAllCategoriesQuery>(GET_CATEGORIES, options)
}
