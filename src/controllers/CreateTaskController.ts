import {Response, Request} from "express";
import { database } from "../database";

export class CreateTaskController {
    async handle(request: Request, response: Response) {
        const { userId } = request.params;
        const { nome, descricao } = request.body;

        try {
            const task = await database.task.create({
                data: {
                    nome,
                    descricao,
                    user: {
                        connect: {
                            id: Number(userId)
                        }
                    }
                }
            });
            return response.status(201).json(task);
        } catch (error) {
            console.error(error);
            return response.status(500).json();
        }
    }
}