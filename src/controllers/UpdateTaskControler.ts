import {Response, Request} from "express";
import { database } from "../database";

export class UpdateTaskController {
    async handle(request: Request, response: Response) {
        const { userId, taskId } = request.params;
        const { nome, descricao } = request.body;

        try {
             await database.task.updateMany({
                where: {
                    id: Number(taskId),
                    userId: Number(userId)
                },
                data: {
                    nome: nome,
                    descricao: descricao
                }
            });

            return response.status(200).json();

        } catch (error) {
            console.error(error); // Log the error for debugging
            return response.status(500).json();
        }
    }
}