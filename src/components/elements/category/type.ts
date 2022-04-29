import { GetAllCategoriesQuery } from 'graphql/generated/schema'

export type CategoryProps = {
  allCategories: GetAllCategoriesQuery['categories']
  setAllCategories: React.Dispatch<React.SetStateAction<string>>
}
