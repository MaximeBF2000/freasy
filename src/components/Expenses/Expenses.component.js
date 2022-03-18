import React from 'react'
import { Expense } from '..'
import { ExpensesContainer, List, AddExpenseContainer } from './Expenses.styled'

export const Expenses = () => {
  return (
    <ExpensesContainer>
      <List>
        {Array(20)
          .fill()
          .map((_, i) => (
            <Expense key={i} text="Macdo" amount={-9.99} date={new Date()} />
          ))}
        <Expense text="Vente Vinted" amount={10} date={new Date()} />
        <Expense text="Carrefour" amount={-8} date={new Date()} />
        <Expense text="Vente Leboncoin" amount={7} date={new Date()} />
      </List>
      <AddExpenseContainer>add expense</AddExpenseContainer>
    </ExpensesContainer>
  )
}
