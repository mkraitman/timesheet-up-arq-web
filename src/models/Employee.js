var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    name: String,
    lastname: String,
    position: String,
    email: String,
    phone: String
});

var Employee = mongoose.model('Employee', EmployeeSchema);


module.exports = Employee;