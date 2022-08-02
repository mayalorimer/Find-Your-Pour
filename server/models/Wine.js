//wine.js
const text = require('body-parser/lib/types/text');
const { Schema, model } = require('mongoose');

const wineSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
   vineyard: {
      type: String,
      required: true,
     
    },
   year: {
      type: Number,
      required: true,
      min: 1900,
      max: 2030
    },
    varietal: 
      {
    type: String,
      },
     price: {
        type: Number,
        required: true,
     },
     type: {
         type: String,
         enum: ['red', 'white', 'sparkling', 'rose', 'dessert'],
         required: true,
     },
      blurb:{
    type: String,
    required: true,
    }

  });

  const Wine = model('Wine', wineSchema);

module.exports = Wine;