// this is a script I used to seed an initial entry onto the database

const mongoose = require('mongoose');

const uri = 'liveurlhere';

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  // Create Project Schema
  const projectSchema = mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String,
    gitUrl: String,
    projectUrl: String,
    skills: [String],
  });

  // Create new collection
  const Project = mongoose.model('projects', projectSchema);

  // Create jefflombard.com record
  const jefflombard = new Project({
    title: 'JeffLombard.com',
    description: 'A portfolio site built with React and Express.',
    imageUrl: '',
    gitUrl: 'https://github.com/jefflombard/jefflombard.com-v4',
    projectUrl: 'https://jefflombard.com',
    skills: ['javascript', 'node', 'express', 'mongodb', 'mongoose', 'sketch'],
  });

  Project.insertMany([jefflombard]).then( () => {
    console.log('inserted');
  });
});
