import { createGlobalStyle } from 'styled-components'

export const InjectGlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    transition: 0.2s all;
  }

  button {
    all: unset;
    transition: 0.2s all;
    cursor: pointer;
  }

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }
`
