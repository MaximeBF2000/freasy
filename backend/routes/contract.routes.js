import { Router } from 'express'
import { getUserContracts, getUserContract } from '../controllers/index.js'

export const contractRouter = Router()

contractRouter.get('/:userId', getUserContracts)

contractRouter.get('/:userId/:contractId', getUserContract)
