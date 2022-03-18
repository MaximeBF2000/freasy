import styled from 'styled-components'
import { fromTheme } from '../../styles'

export const Sidebar = styled.aside``

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const NavigationItem = styled.li`
  cursor: pointer;
  font-size: ${fromTheme('fonts.sizes.l')}px;
  transform: scale(1);
  transform-origin: bottom left;

  &:hover,
  &:focus {
    transform: scale(1.4);
  }
`
