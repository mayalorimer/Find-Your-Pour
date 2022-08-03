// typeDefs.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    wines: [Wine]
  }

  type Wine {
    _id: ID!
    name: String
    vineyard: String
    year: Int
    varietal: String
    price: Int
    type: String
    blurb: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    wines: [Wine]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;