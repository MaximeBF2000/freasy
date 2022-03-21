import mongoose from 'mongoose'

const expenseSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  name: String,
  amount: Number,
  date: Date,
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }
})

export const Expense = mongoose.model('Expense', expenseSchema)
