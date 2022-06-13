var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: String,
    client: String,
    start_date: Date,
    team: [{
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    }],
});

var Project = mongoose.model('Project', ProjectSchema);


module.exports = Project;