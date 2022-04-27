import { HistoricProps } from './types'

export const HistoricMock: HistoricProps = [
  {
    type: 'income',
    userKey: 'gabriel18S0castilho2002',
    createdAt: '09.04.2022 10:20',
    price: {
      etherium: '1.2 ETH',
      dollar: '$3.606,24'
    },
    percent: '20%'
  },

  {
    type: 'outcome',
    userKey: 'gabriel18S0castilho2002',
    createdAt: '20.04.2022 09:10',
    price: {
      etherium: '3.0 ETH',
      dollar: '$9.015,60'
    },
    percent: '40%'
  },

  {
    type: 'income',
    userKey: 'gabriel18S0castilho2002',
    createdAt: '22.04.2022 20:20',
    price: {
      etherium: '1.2 ETH',
      dollar: '$3.606,24'
    },
    percent: '20%'
  }
]
