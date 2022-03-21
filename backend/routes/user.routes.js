import { Router } from 'express'
import { getUsers, getUser, registerUser } from '../controllers/index.js'

export const userRouter = Router()

userRouter.get('/', getUsers)

userRouter.get('/:userId', getUser)

userRouter.post('/register', registerUser)
