const express = require("express")
const resources = require("./resources-model")

const router = express.Router()

router.get('/', (req, res, next) => {
    resources.getResources()
    .then(resources => {
        res.json(resources);
    })
    .catch(err => {
        next(err)
    })
})

router.get('/:id', (req, res, next) => {
    resources.getByResourcesId(req.params.id)
    .then(resource => {
        if(resource) {
            res.json(resource);
        } else {
            res.status(404).json({
                message: 'Could not find resource with given id.'
            })
        }
    }) 
    .catch(err => {
        next(err)
    })
})

router.post('/', (req, res, next) => {
    resources.addResource(req.body)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(err => {
        next(err)
    })
})


module.exports = router;