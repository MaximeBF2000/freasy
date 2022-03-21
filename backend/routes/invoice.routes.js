import { Router } from 'express'
import { getUserInvoices, getUserInvoice } from '../controllers/index.js'

export const invoiceRouter = Router()

invoiceRouter.get('/:userId', getUserInvoices)

invoiceRouter.get('/:userId/:invoiceId', getUserInvoice)
