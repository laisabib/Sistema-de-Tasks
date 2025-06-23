import { Router } from "express";
import { CreateTaskController } from "../controllers/CreateTaskController";
import { ListTasksController } from "../controllers/ListTasksController";
import { RemoveTaskController } from "../controllers/RemoveTaskController";
import { UpdateTaskController } from "../controllers/UpdateTaskControler";

const router = Router();
const createTask = new CreateTaskController();
const listTasks = new ListTasksController();
const removeTask = new RemoveTaskController();
const updateTask = new UpdateTaskController();

router.post('/task', createTask.handle)
router.get('/task/list', listTasks.handle)
router.delete('/task/:id/remove', removeTask.handle)
router.put('/task/:id/update', updateTask.handle)
export {router}