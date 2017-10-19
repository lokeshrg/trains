import {makeExecutableSchema} from 'graphql-tools';
import resolvers from './resolver'

const typeDefs = `
  type Category{
    id: ID!
    title: String!
    description: String!
  }

  type Query{
    allCategories: [Category!]!
  }

  type Mutation{
    createCategory(title: String!, description: String!): Category!
  }
`;

export default makeExecutableSchema({typeDefs, resolvers});
