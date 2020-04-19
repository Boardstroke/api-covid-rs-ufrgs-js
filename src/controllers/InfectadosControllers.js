const { Infectados } = require("../models");
module.exports = {
  set: async (req, res) => {
    try {
      const infectado = Infectados.bulkCreate(req.body);
      res.status(201).send(infectado);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  index: async (req, res) => {
    try {
      const infectados = await Infectados.findAll({
        order:[['mid' ], ['infectados_id']],
        attributes:{exclude: ["createdAt", "updatedAt", "infectados_id"]}
      });
      res.status(200).send(infectados);
    } catch (err) {
      res.status(400).send(err.toString());
    }
  },
};
