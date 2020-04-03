const MunicipiosControllers = require('./controllers/MunicipiosControllers');

module.exports = (app) =>{
  app.get("/municipios/index", MunicipiosControllers.index);
  app.post("/municipios/add", MunicipiosControllers.addMunicipio);
  app.post("/muncipios/add-location", MunicipiosControllers.addLocation);
  app.post("/municipios/add-distancia", MunicipiosControllers.addDistancia);
};
