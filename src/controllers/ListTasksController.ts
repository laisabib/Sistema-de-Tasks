import {Response, Request} from "express";
import { database } from "../database";
import { Task } from "@prisma/client";

export class ListTasksController {
    async handle(request: Request, response: Response) {
        const tasks = await database.task.findMany({
           select: {
            id: true,
            nome: true
           }
        })
        return response.json(tasks)
    }
}