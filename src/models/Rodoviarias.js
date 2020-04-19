module.exports = (sequelize, DataType) => {
  const Rodoviarias = sequelize.define("Rodoviarias", {
    rodoviarias_id:{
      type: DataType.INTEGER,
      autoIncrement:true,
      primaryKey: true
    },
    status: DataType.INTEGER,
  });
  Rodoviarias.associate = function(models) {
    models.Rodoviarias.belongsTo(models.Municipios, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
        name:'mid'
      }
    });

    models.Rodoviarias.hasMany(models.Linhas,{
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'rid',
        allowNull: false
      }
    });
  };
  return Rodoviarias;
};