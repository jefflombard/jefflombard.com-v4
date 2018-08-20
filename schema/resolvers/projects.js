const mongoose = require('mongoose');

const Project = mongoose.model('project');

const projectsResolver = () => Project.find({});

module.exports = projectsResolver;
