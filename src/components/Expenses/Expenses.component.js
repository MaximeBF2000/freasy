import React from 'react'
import cx from 'classnames'
import { useExpensesScroll } from './useExpensesScroll.hook'
import { Expense } from '..'
import { RelativeContainer } from '../utils.styled'
import {
  ExpensesContainer,
  List,
  AddExpenseContainer,
  EndListCover,
  ExpenseInput,
  AddExpenseButton
} from './Expenses.styled'

export const Expenses = () => {
  const [showEndListCover, handleScroll] = useExpensesScroll()

  return (
    <ExpensesContainer>
      <RelativeContainer>
        <List onScroll={handleScroll}>
          {Array(20)
            .fill()
            .map((_, i) => (
              <Expense key={i} text="Macdo" amount={-9.99} date={new Date()} />
            ))}
          <Expense text="Vente Vinted" amount={10} date={new Date()} />
          <Expense text="Carrefour" amount={-8} date={new Date()} />
          <Expense text="Vente Leboncoin" amount={7} date={new Date()} />
        </List>
        <EndListCover className={cx({ showEndListCover })} />
      </RelativeContainer>
      <AddExpenseContainer>
        <ExpenseInput placeholder="Expense" />
        <ExpenseInput placeholder="Amount" />
        <AddExpenseButton>Add expense</AddExpenseButton>
      </AddExpenseContainer>
    </ExpensesContainer>
  )
}
