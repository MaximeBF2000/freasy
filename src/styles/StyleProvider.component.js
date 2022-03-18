import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme, InjectGlobalStyle } from '.'

export const StyleProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <InjectGlobalStyle />
      {children}
    </ThemeProvider>
  )
}
