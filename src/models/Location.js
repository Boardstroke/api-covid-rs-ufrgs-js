module.exports = (sequelize, DataType) => {
  const Location = sequelize.define("Location", {
    lat: DataType.INTEGER,
    lng: DataType.INTEGER
  });
  Location.associate = function(models) {
    models.Location.belongsTo(models.Municipios, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      }
    });
  };
  return Location;
};