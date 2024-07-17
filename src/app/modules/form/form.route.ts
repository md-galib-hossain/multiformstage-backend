import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { FormController } from './form.controller'
import { FormValidation } from './form.validation'
const router = express.Router()
router.post('/create',validateRequest(FormValidation.create),FormController.createForm)
export const FormRoutes = router