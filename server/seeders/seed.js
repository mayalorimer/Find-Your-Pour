//seeds.js
const db = require('../config/connection');
const { Wine } = require('../models');
const wineSeeds = require('./wineSeeds.json');
//const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await Wine.deleteMany({});
    await Wine.create(wineSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});