import {
  IoDiamondOutline,
  IoWalletOutline,
  IoAddOutline,
  IoPulseOutline,
  IoPersonCircleOutline
} from 'react-icons/io5'

type NavigationRoutes = {
  title: string
  url: string
  icon: React.ReactNode
  color: 'primary' | 'secondary'
}

export const navigationRoutes: NavigationRoutes[] = [
  {
    title: 'Home',
    url: '/',
    icon: <IoDiamondOutline />,
    color: 'primary'
  },
  {
    title: 'Wallet',
    url: '/wallet',
    icon: <IoWalletOutline />,
    color: 'primary'
  },
  {
    title: 'Home',
    url: '/',
    icon: <IoAddOutline />,
    color: 'secondary'
  },
  {
    title: 'Ranking',
    url: '/ranking',
    icon: <IoPulseOutline />,
    color: 'primary'
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: <IoPersonCircleOutline />,
    color: 'primary'
  }
]
