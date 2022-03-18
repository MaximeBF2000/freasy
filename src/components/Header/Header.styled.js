import styled from 'styled-components'
import { Button } from '..'
import { fromTheme } from '../../styles'

export const Header = styled.header`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  font-size: 48px;
  text-transform: uppercase;
  font-weight: ${fromTheme('fonts.weights.extrabold')};
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const SignInButton = styled(Button)``

export const LoginButton = styled(Button)``
