module.exports = (sequelize, DataType) => {
  const Municipios = sequelize.define("Municipios", {
    nome: DataType.STRING,
    pop_senso_2010: DataType.INTEGER,
    pop_est_2019: DataType.INTEGER,
    mesoregiao: DataType.STRING,
  });
  Municipios.associate = function(models) {
    models.Municipios.hasOne(models.Location, {
      foreignKey: {
        name: 'mid',
        allowNull: false
      }
    });
    models.Municipios.hasOne(models.Rodoviarias,{
      foreignKey: {
        name: 'mid',
        allowNull: false
      }
    });
    models.Municipios.hasMany(models.Distancias,{
      foreignKey: {
        name: 'mid',
        allowNull: false
      }
    });
    models.Municipios.hasMany(models.Infectados,{
      foreignKey:{
        name:'mid',
        allowNull: false
      }
    });
  };
  return Municipios;
};