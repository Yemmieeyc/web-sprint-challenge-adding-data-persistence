// build your `Task` model here

// const db = require("../../data/dbConfig");
// function getAllWithProjectDetails() {
//   return db("tasks")
//     .join("projects", "tasks.project_id", "projects.project_id")
//     .select("tasks.task_id", "tasks.task_description", "tasks.task_notes", "tasks.task_completed", "projects.project_name", "projects.project_description");
// }
// async function create(task) {
//   const res = await db("tasks").insert(task).returning("*");
//   return res[0];
// }
// module.exports = { getAllWithProjectDetails, create };


const db = require('../../data/dbConfig');

async function getAllTasks() {
    return await db('tasks')
  //const tasks = await db('tasks as t')
    .join('projects', 'task.project_id', 'projects.project_id')
    .select('task.task_id',
        'tasks.task_description',
        'tasks.task_notes',
        db.raw('COALESCE(tasks.tasks_completed, false) as task_completed'),
        'projects.project_name', 
        'project.project_description');

}

async function getTaskById(id) {
  return await db('tasks').where('task_id', id).first();
}

async function create(task) {
  const [id] = await db('tasks').insert(task);
  const createdTask = await db('tasks').where({task_id: id}).first()
  createdTask.task_completed = !!createdTask.task_completed
  return createdTask;
}

module.exports = {
  getAllTasks,
  getTaskById,
  create
};
