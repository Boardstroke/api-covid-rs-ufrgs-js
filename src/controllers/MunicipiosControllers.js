const {Municipios, Location, Distancias} = require('../models');


module.exports = {
  async index(req, res) {
    try {
      const municipios = await Municipios.findAll({
        include: [Location, Distancias],
        order: ['id']

        });
      res.send(municipios);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  async addMunicipio(req, res) {
    try {
      const municipio = await Municipios.create(req.body);
      res.send(municipio.toJSON());
    } catch (err) {
      res.status(400).send(err);
    }
  },
  async addLocation(req,res) {
    try{
      const location = await Location.create(req.body);
      res.send(location.toJSON());
    }catch(err){
      res.status(400).send(err);
    }
  },
  async addDistancia(req,res){
    try{
      const distancia = await Distancias.create(req.body);
      res.send(distancia);
    }catch(err){
      res.status(400).send(err);
    }
  },
  async deleteAll(req,res){
    try{
      const deleteAll = await Municipios.Destroy({where:{
        nome: nome
      }});
      res.send(deleteAll);
    }catch(err){
      res.send(err);
    }
  }
};