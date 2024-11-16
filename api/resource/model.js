// build your `Resource` model here

// const db = require("../../data/dbConfig");
// function getAll() {
//   return db("resources");
// }
// function create(resource) {
//   return db("resources")
//     .insert(resource)
//     .returning("*")
//     .then((res) => res[0]);
// }
// module.exports = { 
//     getAll,
//     create };


const db = require('../../data/dbConfig');

async function getAllResources() {
  return await db('resources');
}

async function create(resource) {
  const [id] = await db('resources').insert(resource);
  return await db('resources').where({resource_id: id }).first()
}

module.exports = {
  getAllResources,
  create,
};
