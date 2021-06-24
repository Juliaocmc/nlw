import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"



interface IComplimentRequest {
    tag_id: string
    user_receiver: string
    user_sender: string
    message: string
}

class CreateComplimentRequest {

    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
    }
}



export { CreateComplimentRequest }