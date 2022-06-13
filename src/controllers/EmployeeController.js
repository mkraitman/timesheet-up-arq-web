var mongoose = require('mongoose');
var Employee = require('../models/Employee');
var EmployeeModel = mongoose.model('Employee', EmployeeModel);

async function save(req, res) {
    let employee = await EmployeeModel.create(req.body);
    return res.status(200).send({ employee });
}

async function find(req, res) {
    let employee = await EmployeeModel.find();
    return res.status(200).send({ employee });
}

async function findById(req, res) {
    try {
        let employee = await EmployeeModel.findById(req.params.id);
        if (!employee)
            return res.status(404).send({ message: "Employee not found" });

        return res.status(200).send({ employee });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

async function remove(req, res) {
    let employee = await EmployeeModel.findByIdAndDelete(req.params.id);
    if (!employee)
        return res.status(404).send({ message: "Employee not found" });

    return res.status(200).send({ employee });
}


module.exports = { save, find, findById, remove };