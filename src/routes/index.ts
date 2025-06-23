import { Router } from "express";
import { CreateTaskController } from "../controllers/CreateTaskController";
import { ListTasksController } from "../controllers/ListTasksController";
import { RemoveTaskController } from "../controllers/RemoveTaskController";
import { UpdateTaskController } from "../controllers/UpdateTaskControler";
import { CreateUserController } from "../controllers/CreateUserController";
import { ListUsersController } from "../controllers/ListUsersController";

const router = Router();
const createUser = new CreateUserController();
const createTask = new CreateTaskController();
const listTasks = new ListTasksController();
const listUsers = new ListUsersController();
const removeTask = new RemoveTaskController();
const updateTask = new UpdateTaskController();

router.post('/users/', createUser.handle);
router.get('/users', listUsers.handle)
router.post('/users/:userId/tasks', createTask.handle);
router.get('/users/:userId/tasks', listTasks.handle)
router.delete('/users/:userId/tasks/:taskId', removeTask.handle)
router.put('/users/:userId/tasks/:taskId', updateTask.handle)
export {router}