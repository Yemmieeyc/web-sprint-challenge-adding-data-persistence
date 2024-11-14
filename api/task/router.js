// build your `/api/tasks` router here

// const express = require("express");
// const Task = require("../task/model");
// const router = express.Router();
// router.post("/", async (req, res, next) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(201).json({
//       ...task,
//       task_completed: Boolean(task.task_completed),
//     });
//   } catch (error) {
//     next(error);
//   }
// });
// router.get("/", async (req, res, next) => {
//   try {
//     const task = await Task.getAllWithProjectDetails();
//     res.status(200).json(
//       task.map((task) => ({
//         ...task,
//         task_completed: Boolean(task.task_completed),
//       }))
//     );
//   } catch (error) {
//     next(error);
//   }
// });
// module.exports = router

const express = require('express');
const Task = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.getAllTasks();
    // const taskWithBooleans = tasks.map(task =>({
    //     ...task,
    //     task_completed: !!task.task_completed
    // }))
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newTask = await Task.create(req.body);
    //newTask.task_completed = !!newTask.task_completed
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
});

module.exports = router;