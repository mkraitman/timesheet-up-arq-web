var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Hours = new Schema({
    quantity: Number,
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    },
    day: Date,
    email: String,
    phone: String
});

var Hours = mongoose.model('Hours');


module.exports = Hours;