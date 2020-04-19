module.exports = (sequelize, DataType) => {
  const Infectados = sequelize.define("Infectados", {
    infectados_id:{
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    numero_infectados: DataType.INTEGER,
    numero_obitos: DataType.INTEGER,
    data: DataType.STRING
  });
  Infectados.associate = function(models) {
    models.Infectados.belongsTo(models.Municipios, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
        name: 'mid'
      }
    });
  };
  return Infectados;
};