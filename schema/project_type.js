const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = graphql;

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    gitUrl: { type: GraphQLString },
    url: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) },
  }),
});

module.exports = ProjectType;
