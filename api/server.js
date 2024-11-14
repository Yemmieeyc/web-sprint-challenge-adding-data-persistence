// build your server here and require it from index.js
const express = require('express')
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express()

server.use(express.json())
server.use('/api/projects',projectRouter)
server.use('/api/resource',resourceRouter)
server.use('/api/task',taskRouter)

server.get('/', (req, res) =>{
    res.json({message: "Welcome to the project"})
})

module.exports = server
