import styled from 'styled-components'
import { rgba } from 'polished'
import { fromTheme } from '../../styles'

export const Text = styled.p``

export const Amount = styled.div`
  color: ${fromTheme('colors.successText')};

  &.negative {
    color: ${fromTheme('colors.dangerText')};
  }
`

export const Date = styled.div``

export const Expense = styled.li`
  width: 800px;
  padding: 0.8rem 0.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  &:nth-child(2n + 1) {
    background-color: ${fromTheme('colors.black_1', c => rgba(c, 0.15))};
  }

  &:hover,
  &:focus {
    background-color: ${fromTheme('colors.black_1', c => rgba(c, 0.3))};
  }

  ${Text}, ${Amount}, ${Date} {
    cursor: cell;
  }
`
