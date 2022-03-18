import React from 'react'
import {
  Sidebar as StyledSidebar,
  NavigationList,
  NavigationItem
} from './Sidebar.styled'
import { useMainRouterContext } from '../../context'
import { mainRoutes } from '../../utils'

const NavItem = ({ title, route }) => {
  const { goTo } = useMainRouterContext()
  const goToRoute = () => goTo(route)

  return <NavigationItem onClick={goToRoute}>{title}</NavigationItem>
}

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <NavigationList>
        <NavItem title="Expenses" route={mainRoutes.expenses} />
        <NavItem title="Taxe converter" route={mainRoutes.taxConverter} />
        <NavItem title="MyInvoices" route={mainRoutes.invoices} />
        <NavItem title="MyContracts" route={mainRoutes.contracts} />
      </NavigationList>
    </StyledSidebar>
  )
}
