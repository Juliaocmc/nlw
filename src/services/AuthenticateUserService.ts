import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepository"
import { sign } from "jsonwebtoken"

interface IAutenticateRequest {
    email: string;
    password: string;
}
class AuthenticateUserService {

    async execute({ email, password }: IAutenticateRequest) {
        const userRepositories = getCustomRepository(UserRepositories);

        const user = await userRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect")
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }

        const token = await sign(
            {
                email: user.email
            },
            "4b6f7cee35b5b1f1817eb64ad02c53bc",
            {
                subject: user.id,
                expiresIn: "15m"
            }
        );

        return token

    }
}

export { AuthenticateUserService }