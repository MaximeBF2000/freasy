import express from 'express'
import { config as setupEnvironnementVars } from 'dotenv'
import {
  userRouter,
  expenseRouter,
  invoiceRouter,
  contractRouter
} from './routes/index.js'
import { initializeDatabase } from './config/db.config.js'

setupEnvironnementVars()
initializeDatabase()

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', userRouter)
app.use('/api/expenses', expenseRouter)
app.use('/api/invoices', invoiceRouter)
app.use('/api/contracts', contractRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
