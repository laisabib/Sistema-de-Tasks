import {Response, Request} from "express";
import { database } from "../database";

export class UpdateTaskController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
        const {nome, descricao} = request.body;

        const task = await database.task.findUnique({
            where: {
                id: Number(id)
            }
        })

        if (!task) {
            return response.status(404).json({ message: "Task not found." });
            }
        
        await database.task.update({
                where: {
                    id: Number(id)
                },
                      data: {
                    nome: nome,
                    descricao: descricao
                }
            });
        return response.status(200).json(task);
    }
}