const mongoose = require('mongoose');
const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = graphql;

const ProjectType = new GraphQLObjectType({
  name: 'ProjectType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
  }),
});

module.exports = ProjectType;
