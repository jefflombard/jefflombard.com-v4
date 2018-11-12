const graphql = require('graphql');
const mongoose = require('mongoose');

const BookType = require('./book_type');
const PostType = require('./post_type');
const ProjectType = require('./project_type');


const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
} = graphql;
const Project = mongoose.model('project');

const { postsResolver, booksResolver } = require('./resolvers');

const RootQueryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type.',
  fields: () => ({
    books: {
      type: new GraphQLList(BookType),
      resolve: booksResolver,
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: postsResolver,
    },
    project: {
      type: ProjectType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (parentValue, { id }) => Project.findById(id),
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve: () => Project.find({}),
    },
  }),
});

module.exports = RootQueryType;