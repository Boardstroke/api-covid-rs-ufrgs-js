module.exports = (sequelize, DataType) => {
  const Infectados = sequelize.define("Infectados", {
    numero_infectados: DataType.INTEGER,
    numero_obitos: DataType.INTEGER,
    data: DataType.STRING
  });
  Infectados.associate = function(models) {
    models.Infectados.belongsTo(models.Municipios, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      }
    });
  };
  return Infectados;
};