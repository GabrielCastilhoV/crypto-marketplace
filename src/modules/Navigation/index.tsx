import { Button } from 'components'

import {
  IoDiamondOutline,
  IoWalletOutline,
  IoAddOutline,
  IoPulseOutline,
  IoPersonCircleOutline
} from 'react-icons/io5'

import * as S from './styles'

export const Navigation = () => {
  return (
    <S.Wrapper>
      <Button size="small" icon={<IoDiamondOutline />} />
      <Button size="small" icon={<IoWalletOutline />} />
      <Button size="small" icon={<IoAddOutline />} color="secondary" />
      <Button size="small" icon={<IoPulseOutline />} />
      <Button size="small" icon={<IoPersonCircleOutline />} />
    </S.Wrapper>
  )
}
