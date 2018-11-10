const graphql = require('graphql');

const resolvers = require('./resolvers');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = graphql;

const BookType = require('./book_type');
const PhotoType = require('./photo_type');
const PostType = require('./post_type');
const ProjectType = require('./project_type');
const { booksResolver } = require('./resolvers');

const RootQueryType = new GraphQLObjectType({
  name: 'QuerytType',
  description: 'The root query type.',
  fields: () => ({
    books: {
      type: new GraphQLList(BookType),
      resolve: booksResolver,
    },
    photos: {
      type: new GraphQLList(PhotoType),
      resolve: () => new Promise((resolve) => {
        resolve([{}]);
      }),
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: () => new Promise((resolve) => {
        resolve([{}]);
      }),
    },
    project: {
      type: ProjectType,
      resolve: () => new Promise((resolve) => {
        resolve({});
      }),
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve: () => new Promise((resolve) => {
        resolve([{}]);
      }),
    },
  }),
});

module.exports = RootQueryType;