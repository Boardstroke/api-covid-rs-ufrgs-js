const {Municipios, Location, Distancias} = require('../models');


module.exports = {
  async index(req, res) {
    try {
      const municipios = await Municipios.findAll({include: [Location, Distancias]});
      res.send(municipios);
    } catch (err) {
      res.status(400).send({
        error: "Banco de dados desconectado"
      });
    }
  },
  async addMunicipio(req, res) {
    try {
      const municipio = await Municipios.create(req.body);
      res.send(municipio);
    } catch (err) {
      res.status(400).send({
        error: err.toJSON()
      });
    }
  },
  async addLocation(req,res) {
    try{
      const location = await Location.create(req.body);
      res.send(location);
    }catch(err){
      res.status(400).send({
        error: err.toJSON()
      });
    }
  },
  async addDistancia(req,res){
    try{
      const distancia = await Distancias.create(req.body);
      res.send(distancia);
    }catch(err){
      res.status(400).send({
        error: err.toJSON()
      });
    }
  }
};