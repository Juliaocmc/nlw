import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AutheticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserContoller } from "./controllers/ListUserController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";


const router = Router();

const createUserController = new CreateUserController();

const createTagController = new CreateTagController()

const authenticateUserController = new AuthenticateUserController();

const createComplimenteController = new CreateComplimentController()

const listUserSenderComplimentsController = new ListUserSenderComplimentsController();

const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();

const listTagsController = new ListTagsController();

const listUserController = new ListUserContoller();

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);


router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAuthenticated, createComplimenteController.handle)

router.get("/users/compliments/send", ensureAuthenticated, listUserSenderComplimentsController.handle)
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiverComplimentsController.handle)
router.get("/tags", listTagsController.handle)
router.get("/users", ensureAuthenticated, listUserController.handle)



export { router }