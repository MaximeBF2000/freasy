import { Router } from 'express'
import { getUserExpenses, getUserExpense } from '../controllers/index.js'

export const expenseRouter = Router()

expenseRouter.get('/:userId', getUserExpenses)

expenseRouter.get('/:userId/:expenseId', getUserExpense)
