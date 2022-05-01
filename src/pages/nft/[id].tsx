import type { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

import { NftView } from 'views'

import { BasicQueryNfts } from 'graphql/queries'

export interface NftPageProps {
  id: string
  name: string
  number: number
  image: string
  price: string
  description: string
  owner: {
    name: string
    image: string
  }
}

const NftPage = (props: NftPageProps): JSX.Element => {
  const router = useRouter()

  if (router.isFallback) return null

  return <NftView {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await BasicQueryNfts()

  const paths = data?.nfts.map((item) => ({
    params: {
      id: item.id
    }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params

  const { data } = await BasicQueryNfts({
    where: {
      id: String(id)
    }
  })

  const response = data?.nfts[0]

  return {
    props: {
      id: response.id,
      name: response.name,
      number: Math.floor(Math.random() * 100),
      image: response.image.url,
      description: response.description,
      price: response.price,
      owner: {
        name: response.owner.name,
        image: response.owner.image.url
      }
    }
  }
}

export default NftPage
