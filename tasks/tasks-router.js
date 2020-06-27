const express = require("express")
const tasks = require("./tasks-model")

const router = express.Router()

router.get('/', (req, res, next) => {
    tasks.getTasks()
    .then(tasks =>{
        res.json(tasks);
    })
    .catch(err => {
        next(err)
    })
})

router.get('/:id', (req, res, next) => {
    tasks.getByTaskId(req.params.id)
    .then(task => {
        if(task) {
            res.json(task);
        } else {
            res.status(404).json({
                message: 'Could not find task with given id.'
            })
        }
    })
    .catch(err => {
        next(err)
    })
})

router.post('/:id', (req, res, next) => {
    tasks.addTask(req.body)
    .then(task => {
        res.status(201).json(task);
    })
    .catch(err => {
        nexr(err)
    })
})



module.exports = router;