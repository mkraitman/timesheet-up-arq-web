const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/ProjectController');
const EmployeeController = require('../controllers/EmployeeController');
const HoursController = require('../controllers/HoursController');

/** Root / HealthCheck . */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Timesheet App - UP 2022 1C - is Running :) !' });
});

/** Project */
router.post('/api/v1/project', ProjectController.save);
router.get('/api/v1/project', ProjectController.find);
router.get('/api/v1/project/:id', ProjectController.findById);
router.delete('/api/v1/project/:id', ProjectController.remove);
router.put('/api/v1/project/:projectId/employee/:employeeId', ProjectController.addTeammate);

/** Employee */
router.post('/api/v1/employee', EmployeeController.save);
router.get('/api/v1/employee', EmployeeController.find);
router.get('/api/v1/employee/:id', EmployeeController.findById);
router.delete('/api/v1/employee/:id', EmployeeController.remove);
router.patch('/api/v1/employee/:id', EmployeeController.update);

/** Hours */
router.post('/api/v1/hours', HoursController.load);
router.get('/api/v1/hours/project/:projectId', HoursController.findByProject);
router.get('/api/v1/hours/employee/:employeeId', HoursController.findByEmployee);
router.get('/api/v1/hours', HoursController.find);

module.exports = router;
