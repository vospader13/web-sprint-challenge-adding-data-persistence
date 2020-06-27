const db = require("../data/config")

function getResouces(){
    return db("resources")

}

function getByResourceId(id){
    return db("resources")
    .where({id})
    .first()
}

function addResource(resource){
    return db('resources')
        .insert(resource)
        .then(ids => {
        return getByResourceId(ids[0])
    })
}

module.exports = {
    getResouces,
    getByResourceId,
    addResource
}