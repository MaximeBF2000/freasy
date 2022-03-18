import styled from 'styled-components'
import { hasProp } from '../styles'

export const Row = styled.div`
  display: flex;
  ${hasProp('gap', ({ gap }) => `gap: ${gap};`)}
  ${hasProp('x', ({ x }) => `justify-content: ${x};`)}
  ${hasProp('y', ({ y }) => `align-items: ${y};`)}
`

export const SpaceY = styled.div`
  width: 100%;
  ${hasProp('y', ({ y }) => `height: ${y};`)}
`

export const RelativeContainer = styled.div`
  position: relative;
`
