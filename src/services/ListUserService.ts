import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepository";



class ListUserService {

    async execute() {
        const userRepositories = getCustomRepository(UserRepositories)

        const user = await userRepositories.find()

        return classToPlain(user)
    }
}

export { ListUserService }