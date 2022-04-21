import Link from 'next/link'
import Image from 'next/image'
import { IoPersonCircleOutline, IoLockOpenOutline } from 'react-icons/io5'

import { Button, Glow, TextField } from 'components'

import * as S from './styles'

export const LoginLayout: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Left></S.Left>

      <S.Right>
        <Glow color="pink" position="top" />
        <Glow color="purple" position="bottom" />
        <Image src="/icons/logo.svg" width={100} height={100} alt="Crypto" />

        <h2>Crypto</h2>
        <p>The largest NFT marketplace</p>

        <S.Form>
          <TextField
            placeholder="Username"
            icon={<IoPersonCircleOutline />}
            radius="top"
          />
          <TextField
            type="password"
            placeholder="Password"
            icon={<IoLockOpenOutline />}
            radius="bottom"
          />

          <S.ForgotPassword>
            <Link href="/">Forgot your password?</Link>
          </S.ForgotPassword>

          <Button color="secondary">Sign in</Button>
        </S.Form>

        <S.Footer>
          <div className="divider" />

          <Button>Sign in with Metamask</Button>
        </S.Footer>
      </S.Right>
    </S.Wrapper>
  )
}
