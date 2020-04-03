module.exports = (sequelize, DataType) => {
  const Municipios = sequelize.define("Municipios", {
    nome: DataType.STRING,
    pop_senso_2010: DataType.INTEGER,
    pop_est_2019: DataType.INTEGER,
    mesoregiao: DataType.STRING,
  });
  Municipios.associate = function(models) {
    models.Municipios.hasOne(models.Location);
    models.Municipios.hasMany(models.Distancias);
  };
  return Municipios;
};