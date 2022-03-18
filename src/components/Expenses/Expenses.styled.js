import styled from 'styled-components'
import { rgba } from 'polished'
import { fromTheme, hasProp } from '../../styles'

export const ExpensesContainer = styled.div``

export const List = styled.ul`
  max-height: 200px;
  margin-bottom: 2rem;
  overflow-y: scroll;
`

export const EndListCover = styled.div`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: linear-gradient(
    to bottom,
    ${fromTheme('colors.black_1', c => rgba(c, 0.1))},
    ${fromTheme('colors.black_1', c => rgba(c, 0.2))},
    ${fromTheme('colors.black_1', c => rgba(c, 0.3))},
    ${fromTheme('colors.black_1', c => rgba(c, 0.4))}
  );

  &.showEndListCover {
    opacity: 0;
  }
`

export const AddExpenseContainer = styled.div``
