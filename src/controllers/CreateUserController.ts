import {Response, Request} from "express";
import { database } from "../database";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const {nome, email} = request.body;
        const user = await database.user.create({
            data: {
                nome,
                email: email
            }
        })
        return response.json(user)
    }
}