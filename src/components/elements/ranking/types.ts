type TransactionType = 'income' | 'outcome'

export type RankingProps = {
  type: TransactionType
  user: {
    key: string
    name: string
    image: string
  }
  price: string
  percent: string
}[]
