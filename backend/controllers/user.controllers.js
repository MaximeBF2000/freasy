import { User } from '../models/index.js'

export const getUsers = (req, res) => {
  res.json({ users: [] })
}

export const getUser = (req, res) => {
  const { userId } = req.params

  res.json({
    user: {
      id: userId
    }
  })
}

export const registerUser = async (req, res) => {
  const { username, password } = req.body

  const newUser = new User({
    username,
    password
  })

  await newUser.save()

  return res.status(200).json({ user: newUser })
}
