module.exports = (sequelize, DataType) => {
  const Distancias = sequelize.define("Distancias", {
    dest: DataType.STRING,
    dist: DataType.INTEGER
  });
  Distancias.associate = function(models) {
    models.Distancias.belongsTo(models.Municipios, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      }
    });
  };
  return Distancias;
};