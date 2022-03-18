import React from 'react'
import { Header, MainRouter, Sidebar, TaxConverter } from '../components'
import { Row, SpaceY } from '../components/utils.styled'
import { useMainRouterContext } from '../context'

const Index = () => {
  const { currentRoute } = useMainRouterContext()

  return (
    <>
      <Header />
      <SpaceY y="8rem" />
      <Row x="space-between" y="flex-start">
        <Sidebar />
        <MainRouter route={currentRoute} />
      </Row>
    </>
  )
}

export default Index
