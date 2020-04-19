module.exports = (sequelize, DataType) => {
  const Location = sequelize.define("Location", {

    lat:{
      type: DataType.DOUBLE,
    } ,
    lng:{
      type: DataType.DOUBLE,
    }
  });
  Location.associate = function(models) {
    models.Location.belongsTo(models.Municipios, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
        name: "mid"
      }
    });
  };
  return Location;
};