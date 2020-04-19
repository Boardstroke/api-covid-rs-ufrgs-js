const {Location} = require('../models');

module.exports = {
  set: async (req,res)=>{
    try {
      const localizacoes = await Location.bulkCreate(req.body);
      res.status(201).send(localizacoes);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },
  index: async(req,res)=>{
    try{
      const localizacoes = await Location.findAll();
      res.status(200).send(localizacoes);
    } catch(err){
      res.status(400).send(err.toString());
    }
  }
};