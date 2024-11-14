// build your `Project` model here
const db = require('../../data/dbConfig')
async function getProjects() {
  const projects = await db('projects').select('*');
  return projects.map(project => ({
    ...project,
    project_completed: !!project.project_completed  // Convert integer to boolean
  }));
}

async function getProjectById(id) {
  return await db('projects').where('project_id', id).first();
}

async function create(project) {
  const [id] = await db('projects').insert(project);
  return getProjectById(id);
}

module.exports = {
  getProjects,
  getProjectById,
  create
}