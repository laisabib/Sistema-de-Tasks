import {Response, Request} from "express";
import { database } from "../database";

export class ListUsersController {
    async handle(request: Request, response: Response) {
        try {
             const users = await database.user.findMany({
                select: {
                    id: true,
                    nome: true
                }
        })

            return response.json(users);

        } catch (error) {
            console.error(error);
            return response.status(500).json();
        }
    }
}