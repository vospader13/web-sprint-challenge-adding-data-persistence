const db = require("../data/config")

function getProjects(){
    return db('projects')
}

function getByProjectId(id){
    return db('projects')
        .where({id})
        .first()
}

function addProject(project){
    return db('projects')
        .insert(project)
        .then(ids => {
        return getByProjectId(ids[0])
    })
}

module.exports ={
    getProjects,
    getByProjectId,
    addProject
}