const express = require("express")
const projects = require('./projects-model')

const router = express.Router()

router.get('/', (req, res) => {
    projects.getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });


  router.get('/:id', (req, res, next) => {
    projects.getByProjectId(req.params.id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ 
            message: 'Could not find project with given id.' })
      }
    })
    .catch(err => {
      next(err)
    })
  })


  router.post('/', (req, res, next) => {
      projects.addProject(req.body)
      .then(project => {
          res.status(201).json(project);
      })
      .catch(err => {
          next(err)
      })
  })
  
  module.exports = router;