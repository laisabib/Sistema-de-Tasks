import {Response, Request} from "express";
import { database } from "../database";

export class RemoveTaskController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;

        const task = await database.task.findUnique({
            where: {
                id: Number(id)
            }
        })

        if (!task) {
            return response.status(404).json({ message: "Task not found." });
            }
        
        await database.task.delete({
                where: {
                    id: Number(id)
                }
            });
            
        return response.status(204).send()
    }
}