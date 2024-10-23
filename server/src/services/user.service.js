import userModel from "../models/user.model.js"

export class UserService {
    static loginDemo = async ({
        username
    }) => {
        try {
            const foundUser = await userModel.findOne({
                username
            }).lean()

            if (!foundUser) {
                return {
                    message: "User not found",
                    code: 404,
                    metadata: null
                };
            }

            return {
                message: "success",
                code: 1,
                metadata: foundUser
            }
        } catch (error) {
            return {
                message: "Error from server",
                code: 0,
                metadata: ""
            }
        }
    }
    static createUser = async ({
        username
    }) => {
        try {
            const data = await userModel.create({
                username
            });
            return {
                message: "success",
                code: 1,
                metadata: data
            }

        } catch (error) {
            return {
                message: error.stack,
                code: 0,
                metadata: ""
            }
        }
    }
}