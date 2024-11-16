// build your `/api/projects` router here

const express = require('express');
const Project = require('./model');

const router = express.Router();

// router.get("/", async (req, res, next) => {
//   try {
//     const projects = await Project.getAll();
//     res.status(200).json(
//       projects.map((project) => ({
//         ...project,
//         project_completed: Boolean(project.project_completed),
//       }))
//     );
//   } catch (error) {
//     next(error);
//   }
// });

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.getProjects();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newProject = await Project.create(req.body);
    newProject.project_completed = !!newProject.project_completed
    res.status(201).json(newProject);
  } catch (err) {
    next(err);
  }
});

module.exports = router;