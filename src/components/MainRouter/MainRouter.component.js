import React from 'react'
import { Main, Expenses, TaxConverter } from '..'

const wrapper = (Component, title) => {
  return (
    <Main title={title}>
      <Component />
    </Main>
  )
}

export const MainRouter = ({ route }) => {
  switch (route) {
    case 'expenses':
      return wrapper(Expenses, 'Expenses')
    case 'tax_converter':
      return wrapper(TaxConverter, 'Taxe converter')
    case 'invoices':
      return wrapper(() => <div>invoices</div>, 'MyInvoices')
    case 'contracts':
      return wrapper(() => <div>contracts</div>, 'MyContracts')

    default:
      return <div>MainRouter</div>
  }
}
