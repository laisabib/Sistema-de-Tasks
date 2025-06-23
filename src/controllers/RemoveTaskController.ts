import {Response, Request} from "express";
import { database } from "../database";

export class RemoveTaskController {
    async handle(request: Request, response: Response) {
        const { userId, taskId } = request.params;

        try {
            await database.task.deleteMany({
                where: {
                    id: Number(taskId),      
                    userId: Number(userId)  
                }
            });
     
            return response.status(204).send();

        } catch (error) {
            console.error(error);
            return response.status(500).json();
        }
    }
}