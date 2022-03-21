import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  username: String,
  password: String
})

export const User = mongoose.model('User', userSchema)
