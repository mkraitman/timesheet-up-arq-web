var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HoursSchema = new Schema({
    quantity: Number,
    day: Date,
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    }
});

var Hours = mongoose.model('Hours', HoursSchema);


module.exports = Hours;