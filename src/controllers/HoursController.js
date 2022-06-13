var mongoose = require('mongoose');
var Employee = require('../models/Employee');
var Ho = mongoose.model('Employee', EmployeeModel);

async function load(req, res) {
    let employee = await EmployeeModel.create(req.body);
    return res.status(200).send({ employee });
}


module.exports = { save, find, findById, remove };