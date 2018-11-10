const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const PhotoType = new GraphQLObjectType({
  name: 'Photo',
  fields: () => ({
    id: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
});

module.exports = PhotoType;
