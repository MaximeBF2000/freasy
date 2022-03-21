import mongoose from 'mongoose'

const contractSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  to: {
    name: String
  },
  content: String,
  date: Date,
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }
})

export const Contract = mongoose.model('Contract', contractSchema)
