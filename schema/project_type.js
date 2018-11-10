const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = graphql;

const SkillType = new GraphQLObjectType({
  name: 'Skill',
  fields: () => ({
    skill: { type: GraphQLString },
  }),
});

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    gitUrl: { type: GraphQLString },
    url: { type: GraphQLString },
    skills: { type: new GraphQLList(SkillType) },
  }),
});

module.exports = ProjectType;
