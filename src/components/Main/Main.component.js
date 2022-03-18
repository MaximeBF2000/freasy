import React from 'react'
import { MainContainer, Title, ContentContainer } from './Main.styled'

export const Main = ({ title, children }) => {
  return (
    <MainContainer>
      {title && <Title>{title}</Title>}
      <ContentContainer>{children}</ContentContainer>
    </MainContainer>
  )
}
