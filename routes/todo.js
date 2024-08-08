const express = require("express");
const { addFormTodoController, updateTodoFormController, deleteTodoPageController, addTodoController, homeController, updateTodoController, deleteTodoController } = require("../controllers/todo");

const router = express.Router();

router.get("/", homeController);

router.get("/add-todo", addFormTodoController);

router.get("/update-todo", updateTodoFormController);

router.get("/delete-todo", deleteTodoPageController);

router.post("/add-todo", addTodoController);

router.post("/update-todo/:id", updateTodoController);

router.get("/confirm-delete", deleteTodoController);

module.exports = router;
