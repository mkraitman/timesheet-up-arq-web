var mongoose = require('mongoose');
require('../models/Employee');
require('../models/Hours');
require('../models/Project');
var EmployeeModel = mongoose.model('Employee', EmployeeModel);
var ProjectModel = mongoose.model('Project', ProjectModel);
var HoursModel = mongoose.model('Hours', HoursModel);
var moment = require('moment');

async function load(req, res) {
    try {
        let employee = await EmployeeModel.findById(req.body.employee_id);
        if (!employee)
            return res.status(404).send({ message: "Employee not found" });

        let project = await ProjectModel.findById(req.body.project_id);
        if (!project)
            return res.status(404).send({ message: "Project not found" });

        if (project.team.indexOf(employee._id) === -1) {
            return res.status(200).send({ message: "Employee not in project team" });
        }

        if (moment().isBefore(moment(req.body.day))) {
            return res.status(400).send({ message: "Day is in the future" });
        }

        if (req.body.quantity > 24) {
            return res.status(400).send({ message: "Quantity is greater than 24hs" });
        }

        let hours = await HoursModel.findOne({ employee, project, day: req.body.day }).populate('project').populate('employee');

        if (hours)
            return res.status(200).send({ message: "Hours already registered on this project" });

        let item = {
            quantity: req.body.quantity,
            day: req.body.day,
            project: project,
            employee: employee
        }

        hours = await HoursModel.create(item)

        return res.status(200).send({ hours });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

async function findByProject(req, res) {
    let hours = {};
    if (req.query.begin && req.query.end)
        hours = { day: { $gte: moment(req.query.begin), $lte: moment(req.query.end) } }

    hours.project = req.params.projectId;
    hours = await HoursModel.find(hours).populate('project').populate('employee');
    if (!hours)
        return res.status(404).send({ message: "Hours not found" });

    return res.status(200).send({ hours });
}

async function findByEmployee(req, res) {
    let hours = {};
    if (req.query.begin && req.query.end)
        hours = { day: { $gte: moment(req.query.begin), $lte: moment(req.query.end) } }

    hours.employee = req.params.employeeId;
    hours = await HoursModel.find(hours).populate('project').populate('employee');
    if (!hours)
        return res.status(404).send({ message: "Hours not found" });

    return res.status(200).send({ hours });
}

async function find(req, res) {
    let hours = await HoursModel.find();
    if (!hours)
        return res.status(404).send({ message: "Hours not found" });

    return res.status(200).send({ hours });
}





module.exports = { load, findByProject, findByEmployee, find };