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

        // finding an array of wines based off the paramaters the user picks 
    getWine: async (parent, { type, minPrice, maxPrice }) => {
      const params = type ?  type  : "";
      let priceQuery = {};
      if (minPrice){
        priceQuery = { ...priceQuery, $gte: minPrice };
      }
      if (maxPrice) {
        priceQuery = { ...priceQuery, $lte: maxPrice };
      }
      // return if only paramaters for price
      if (!type && minPrice){
        return Wine.find({
        price: { $gte:minPrice, $lte:maxPrice }
        });
      }
      // return if only parameters for type
      else if(!minPrice && type){
        return Wine.find({ type });
      }
      // return if the user provides paramaters for type and price
      else {
        return Wine.find({
          type: params, 
          $or: [ {price: { $gte:minPrice, $lte:maxPrice }} ]
        })
      }
    },

    wines: async (parent, args) => {
        return Wine.find()
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
    // login: async (parent, { email, password }) => {
    //   const user = await User.findOne({ email });

    //   if (!user) {
    //     throw new AuthenticationError('Incorrect credentials');
    //   }

    //   const correctPw = await user.isCorrectPassword(password);

    //   if (!correctPw) {
    //     throw new AuthenticationError('Incorrect credentials');
    //   }
    //   const token = signToken(user);
    //   return { token, user };
    // },  
    createWine: async (parent, { name, vineyard, year, varietal, price, type, blurb }, context) => {
      // creates the new wine in the database
      if (context.user) {
        const wine = await Wine.create({ name, vineyard, year, varietal, price, type, blurb });

      // adds the wine to the current users wine array
      await User.findOneAndUpdate (
        { _id: context.user._id},
        { $addToSet: { wine: wine._id }}
      )
      
      return wine; 
      }
    }, 
  }

};

module.exports = resolvers;
