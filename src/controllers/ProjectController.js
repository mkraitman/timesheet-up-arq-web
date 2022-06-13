var mongoose = require('mongoose');
var Employee = require('../models/Employee');
var EmployeeModel = mongoose.model('Employee', EmployeeModel);
var Project = require('../models/Project');
var ProjectModel = mongoose.model('Project', ProjectModel);

async function save(req, res) {
    let project = await ProjectModel.create({
        name: req.body.name,
        client: req.body.client,
        start_date: new Date()
    });
    return res.status(200).send({ project });
}

async function find(req, res) {
    let project = await ProjectModel.find();
    return res.status(200).send({ project });
}

async function findById(req, res) {
    try {
        let project = await ProjectModel.findById(req.params.id).populate('team').populate('team').populate('team.employee');
        if (!project)
            return res.status(404).send({ message: "Project not found" });

        return res.status(200).send({ project });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

async function remove(req, res) {
    let project = await ProjectModel.findByIdAndDelete(req.params.id).populate('team').populate('team.employee');
    if (!project)
        return res.status(404).send({ message: "Project not found" });

    return res.status(200).send({ project });
}

async function addTeammate(req, res) {
    let project = await ProjectModel.findById(req.params.projectId);
    if (!project)
        return res.status(404).send({ message: "Project not found" });

    let employee = await EmployeeModel.findById(req.params.employeeId);

    if (!employee)
        return res.status(404).send({ message: "Employee not found" });

    project.team.push(employee);

    project = await project.save().populate('team').populate('team.employee');

    return res.status(200).send({ project });
}



module.exports = { save, find, findById, remove, addTeammate };