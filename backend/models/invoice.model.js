import mongoose from 'mongoose'

const invoiceSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  to: {
    name: String
  },
  description: String,
  charges: [Object],
  date: Date,
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }
})

export const Invoice = mongoose.model('Invoice', invoiceSchema)
