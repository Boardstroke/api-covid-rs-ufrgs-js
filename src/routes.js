const MunicipiosControllers = require('./controllers/MunicipiosControllers');
const DistanciasControllers = require('./controllers/DistanciasControllers');
const RodoviariasControllers = require('./controllers/RodoviariasControllers');
const InfectadosControllers = require('./controllers/InfectadosControllers');
const LocalizacaoControllers = require('./controllers/LocalizacaoControllers');
module.exports = (app) =>{
  // Municipios:
  app.get("/index/municipios", MunicipiosControllers.index);
  app.post("/set/municipios", MunicipiosControllers.set);
  // Distancias:
  app.post("/set/distancias", DistanciasControllers.set);
  app.get("/index/distancias", DistanciasControllers.index);

  // Rodoviarias:
  app.post("/set/rodoviarias", RodoviariasControllers.setRodoviarias);
  app.get("/index/rodoviarias", RodoviariasControllers.indexRodoviarias);
  app.post("/set/rodoviarias/linhas", RodoviariasControllers.setLinhas);
  app.get("/index/rodoviarias/linhas", RodoviariasControllers.indexLinhas);
  // Deve ser melhorado
  app.post("/set/rodoviarias/detalhes", RodoviariasControllers.setLinhas);
  app.get("/index/rodoviarias/detalhes", RodoviariasControllers.indexDetalhes);

  // Infectados
  app.post("/set/infectados", InfectadosControllers.set);
  app.get("/index/infectados", InfectadosControllers.index);

  // Localizacao
  app.post('/set/localizacao', LocalizacaoControllers.set);
  app.get('/index/localizacao', LocalizacaoControllers.index);

};
