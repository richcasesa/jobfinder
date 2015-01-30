var mongoose = require("mongoose");

var jobSchema = mongoose.Schema({
    title: {type: String},
    description: {type: String}
});

var model = mongoose.model('Job', jobSchema);
exports.model = model;
