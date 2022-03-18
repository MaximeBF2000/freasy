import React from 'react'
import {
  Expense as ExpenseContainer,
  Text,
  Amount,
  Date as StyledDate
} from './Expense.styled'
import { Row } from '../utils.styled'
import cx from 'classnames'

export const Expense = ({ text, amount, date }) => {
  const negative = amount < 0

  return (
    <ExpenseContainer>
      <Text>{text}</Text>
      <Row gap="2rem">
        <Amount className={cx({ negative })}>
          {!negative ? '+' : ''}
          {amount} €
        </Amount>
        <StyledDate>{new Date(date).toLocaleDateString()}</StyledDate>
      </Row>
    </ExpenseContainer>
  )
}
