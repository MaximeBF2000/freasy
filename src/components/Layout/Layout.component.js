import React from 'react'
import { LayoutContainer } from './Layout.styled'
import { MainRouterProvider } from '../../context'
import { StyleProvider } from '../../styles'

export const Layout = ({ children }) => {
  return (
    <MainRouterProvider>
      <StyleProvider>
        <LayoutContainer>{children}</LayoutContainer>
      </StyleProvider>
    </MainRouterProvider>
  )
}
