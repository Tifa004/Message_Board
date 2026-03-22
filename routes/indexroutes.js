const { Router } = require("express");
const userController = require("../controllers/userController");
const indexRouter = Router();

indexRouter.get("/", userController.getMessages);
indexRouter.get("/post", userController.createMessageGet);
indexRouter.post("/", userController.createMessagePost);

module.exports = indexRouter;