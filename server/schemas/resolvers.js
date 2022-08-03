//resolvers.js
const { AuthenticationError } = require('apollo-server-express');
const { User, Wine } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },


    wines: async (parent, args) => {
        return Wine.find()

    }, 
    getWine: async (parent, { type, price }) => {
    //  const params = type ? { type } ? { price } : {};
      let params;
      if (type && price){
        params = { type, price };
      }
      else if (type) {
        params = { type };
      }
      else if (price){
        params = { price };
      }
      else {
        params = {}; 
      }
      return Wine.find(params);
    },

    getOneWine: async (parent, { wineID }) => {
      return Wine.findOne({ _id: wineID }); 
    },

  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    }, 
  //  createWine: 
  },
};

module.exports = resolvers;