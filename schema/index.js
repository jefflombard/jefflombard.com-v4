const graphql = require('graphql');

const {
  GraphQLSchema,
} = graphql;

const RootQueryType = require('./root_query_type');

const schema = new GraphQLSchema({
  query: RootQueryType,
});

module.exports = schema;
