const graphql = require('graphql');

const ProjectType = ('./project_type');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
} = graphql;


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    project: {
      type: ProjectType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return { id };
      },
    },
  }),
});

module.exports = RootQuery;
