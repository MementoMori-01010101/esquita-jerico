// I want to go to Route A
// this is what will happen

const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/todoController");

// Define the routes
router.get("/", TodoController.getAllTodos);
router.post("/", TodoController.createTodo);
router.get("/:id", TodoController.getTodoById);
router.put("/:id", TodoController.updateTodo);
router.put("/:id", TodoController.deleteTodo);

module.exports = router;
