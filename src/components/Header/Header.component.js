import React from 'react'
import {
  Header as StyledHeader,
  Logo,
  SignInButton,
  LoginButton,
  ButtonContainer,
} from './Header.styled'

export const Header = () => {
  return (
    <StyledHeader>
      <Logo>Freasy</Logo>
      <ButtonContainer>
        <SignInButton variant="secondary">Sign In</SignInButton>
        <LoginButton>Login</LoginButton>
      </ButtonContainer>
    </StyledHeader>
  )
}
