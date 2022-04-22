type TransactionType = 'income' | 'outcome'

export type HistoricProps = {
  type: TransactionType
  userKey: string
  createdAt: string
  price: {
    etherium: string
    dollar: string
  }
  percent: string
}[]
