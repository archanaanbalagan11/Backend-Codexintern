const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.post("/", todoController.createTodo);
router.get("/", todoController.getTodos);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);
router.patch("/:id/complete", todoController.markAsCompleted);

module.exports = router;
