module.exports = (sequelize, DataType) => {
  const Location = sequelize.define("Location", {
    id: {
       type: DataType.INTEGER,
       autoIncrement: true,
       primaryKey: true
    },
    lat: DataType.DOUBLE,
    lng: DataType.DOUBLE
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