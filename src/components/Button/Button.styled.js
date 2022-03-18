import styled from 'styled-components'
import { fromTheme } from '../../styles'

export const Button = styled.button`
  &.primary {
    padding: 0.8rem 1.5rem;
    color: ${fromTheme('colors.white_1')};
    background-color: ${fromTheme('colors.black_1')};
    border-radius: 0.3rem;
  }

  &.secondary {
    color: ${fromTheme('colors.black_1')};
  }

  &.tertiary {
  }
`
