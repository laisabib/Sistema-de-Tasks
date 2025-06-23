import {Response, Request} from "express";
import { database } from "../database";

export class ListTasksController {
    async handle(request: Request, response: Response) {
        const { userId } = request.params;

        try {
            const tasks = await database.task.findMany({
               where: {
                    userId: Number(userId)
               },
               select: {
                id: true,
                nome: true,
                descricao: true 
               }
            });

            return response.json(tasks);

        } catch (error) {
            console.error(error);
            return response.status(500).json();
        }
    }
}