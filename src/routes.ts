import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AutheticateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";


const router = Router();

const createUserController = new CreateUserController();

const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handler);

router.post("/tags", ensureAdmin, createTagController.handler);

router.post("/login", authenticateUserController.handler)


export { router }