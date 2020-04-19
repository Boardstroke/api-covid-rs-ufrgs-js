module.exports = (sequelize, DataType) => {
  const Distancias = sequelize.define("Distancias", {
    distancia_id:{
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    destino: DataType.STRING,
    distancia: DataType.INTEGER
  });
  Distancias.associate = function(models) {
    models.Distancias.belongsTo(models.Municipios, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
        name: 'mid',
      }
    });
  };
  return Distancias;
};