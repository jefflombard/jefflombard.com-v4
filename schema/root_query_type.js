const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const BookType = require('./book_type');
const PhotoType = require('./photo_type');
const PostType = require('./post_type');
const ProjectType = require('./project_type');

const RootQueryType = new GraphQLObjectType({
  name: 'QuerytType',
  description: 'The root query type.',
  fields: () => ({
    book: {
      type: BookType,
      resolve: () => new Promise((resolve) => {
        resolve({});
      }),
    },
    photo: {
      type: PhotoType,
      resolve: () => new Promise((resolve) => {
        resolve({});
      }),
    },
    post: {
      type: PostType,
      resolve: () => new Promise((resolve) => {
        resolve({});
      }),
    },
    project: {
      type: ProjectType,
      resolve: () => new Promise((resolve) => {
        resolve({});
      }),
    },
  }),
});

module.exports = RootQueryType;