const db = require("../data/config")

function getTasks(){
    return db("tasks")
}

function getByTaskId(id){
    return db("tasks")
    .where({id})
    .first()
}

function addTask(task){
    return db('tasks')
        .insert(task)
        .then(ids => {
        return getByTaskId(ids[0])
    })
}


module.exports = {
    getTasks,
    getByTaskId,
    addTask
}