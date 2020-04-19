const {Rodoviarias, Linhas, Detalhes} = require('../models');

module.exports = {
  setRodoviarias: async(req,res)=>{
    try {
      const rodoviaria = await Rodoviarias.bulkCreate(req.body);
      res.status(201).send(rodoviaria);
    } catch (err) {
      res.send(err.toString());
    }
  },
  indexRodoviarias: async(req,res) =>{
    try {
      const rodoviaria = await Rodoviarias.findAll({
        order: [
          ['rodoviarias_id'],
        ],
        attributes: { exclude: ["createdAt", "updatedAt", "rodoviarias_id"] },
      });
      res.status(200).send(rodoviaria);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },
  setLinhas: async(req,res)=>{
    try {
      const linhas = await Linhas.bulkCreate(req.body);
      res.status(201).send(linhas);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },
  indexLinhas: async(req,res) =>{
    try {
      const linhas = await Linhas.findAll({
        order: [['linhas_id']],
        attributes: {exclude: ["createdAt", "updatedAt", "linhas_id","rid"]},
      });
      res.status(200).send(linhas);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },
  setDetalhes: async(req,res) =>{
    try {
      const detalhes = await Detalhes.bulkCreate(req.body);
      res.status(201).send(detalhes);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },
  indexDetalhes: async(req,res)=>{
    try{
      const detalhes = await Detalhes.findAll({
        order:[['id']],
        attributes: {exclude: ["createdAt", "updatedAt", "id", "lid"]}
      });
      res.status(200).send(detalhes);
    }catch(err){
      res.status(400).send(err.toString());
    }
  }
};