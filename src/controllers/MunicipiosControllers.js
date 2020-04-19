const {
  Municipios,
  Location,
} = require("../models");

module.exports = {
  index: async (req, res) => {
    try {
      const municipios = await Municipios.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(200).send(municipios);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },

  set: async (req, res)  =>{
    try {
      const municipio = await Municipios.bulkCreate(req.body);
      res.status(201).send(municipio);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },
};
