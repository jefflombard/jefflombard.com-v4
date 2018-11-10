const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
});

module.exports = BookType;
