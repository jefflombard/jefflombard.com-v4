const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = graphql;

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    url: { type: GraphQLString },
    date: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) },
  }),
});

module.exports = PostType;
