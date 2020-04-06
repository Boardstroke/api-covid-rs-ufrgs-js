const MunicipiosControllers = require('./controllers/MunicipiosControllers');

module.exports = (app) =>{
  app.get("/municipios/index", MunicipiosControllers.index);
  app.get("/municipios/restart", MunicipiosControllers.deleteAll);
  app.post("/municipios/add", MunicipiosControllers.addMunicipio);
  app.post("/municipios/add-location", MunicipiosControllers.addLocation);
  app.post("/municipios/add-distancia", MunicipiosControllers.addDistancia);
  app.post("/municipios/add-infectados", MunicipiosControllers.addInfectados);
};
