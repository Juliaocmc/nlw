import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";


const router = Router();

const createUserController = new CreateUserController();

const createTagController = new CreateTagController()

router.post("/users", createUserController.handler);

router.post("/tags", ensureAdmin, createTagController.handler);


export { router }