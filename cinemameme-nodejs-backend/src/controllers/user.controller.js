import {
    sendError,
    sendSuccess
} from "../helper/index.js"
import {
    UserService
} from "../services/user.service.js"

class UserController {
    loginDemo = async (req, res, next) => {
        try {
            const respond = await UserService.loginDemo(req.body)
            return sendSuccess(res, respond)
        } catch (error) {
            return sendError(res, error)
        }
    }


    createUser = async (req, res, next) => {
        try {
            const respond = await UserService.createUser(req.body)

            return sendSuccess(res, respond)
        } catch (error) {
            return sendError(res, error)
        }

    }
}

export default new UserController()