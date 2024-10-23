import express from 'express'
import userController from '../controllers/user.controller.js'

const router = express.Router()

router.post('/login', userController.loginDemo)
router.post('', userController.createUser)

export default router