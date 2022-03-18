import styled from 'styled-components'
import { rgba } from 'polished'
import { fromTheme } from '../../styles'

export const TaxConverter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Input = styled.input.attrs({
  type: 'number'
})`
  width: 100%;
  min-width: 400px;
  padding: 1rem;
  font-size: ${fromTheme('fonts.sizes.m')}px;
  outline: none;
  overflow: hidden;
  border: solid 1px;

  &:focus {
    border: solid 1px;
  }
`
