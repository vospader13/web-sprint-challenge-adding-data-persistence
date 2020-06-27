const express = require("express")
const helmet = require("helmet")
const projectsRouter = require("./projects/projects-router")
const resourcesRouter = require("./resources/resources-router")
const tasksRouter = require("./tasks/tasks-router")

const server = express()
const port = process.env.PORT || 5055

server.use(helmet())
server.use(express.json())

server.use("/projects", projectsRouter)
server.use("/resources", resourcesRouter)
server.use("/tasks", tasksRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "something is wrong"
    })
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})