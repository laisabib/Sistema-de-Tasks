import {Response, Request} from "express";
import { database } from "../database";

export class CreateTaskController {
    async handle(request: Request, response: Response) {
        const {nome, descricao} = request.body;
        const task = await database.task.create({
            data: {
                nome,
                descricao
            }
        })
        return response.json(task)
    }
}