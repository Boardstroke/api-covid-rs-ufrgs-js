const {Distancias} = require('../models');

module.exports = {
  index: async (req,res)=> {
    try{
      const municipios = await Distancias.findAll({
        order: [['distancia_id']],
        attributes: { exclude: ["createdAt", "updatedAt", "mid", "distancia_id"] }
      });
      res.status(200).send(municipios);
    }catch(err){
      console.log(err.toString());
      res.status(400).send(err.toString());
    }
  },
  set: async (req, res)=>{
    try {
      const distancia = await Distancias.bulkCreate(req.body);
      res.status(200).send(distancia);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },
};
