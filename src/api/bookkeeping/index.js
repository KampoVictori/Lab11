import {Router} from "express";
import passport from "passport";
import bookkeepingControler from "./controllerMongoose";

const bookkeepingRouter = new Router();
bookkeepingRouter.get("/", bookkeepingControler.get);
bookkeepingRouter.get("/:id", bookkeepingControler.getById);
bookkeepingRouter.post("/", bookkeepingControler.post);
bookkeepingRouter.delete("/:id",bookkeepingControler.delete);
bookkeepingRouter.patch("/:id",bookkeepingControler.patch);

export default bookkeepingRouter;