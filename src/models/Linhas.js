module.exports = (sequelize, DataType) => {
  const Linhas = sequelize.define('Linhas', {
    linhas_id:{
      type: DataType.INTEGER,
      autoIncrement:true,
      primaryKey: true,
    },
    destino: DataType.STRING,
    quantidade: DataType.INTEGER,
  });
  Linhas.associate = function(models){
    models.Linhas.belongsTo(models.Rodoviarias, {
      foreignKey:{
        name: 'rid',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
    models.Linhas.hasMany(models.Detalhes, {
      foreignKey:{
        name: 'lid',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };
  return Linhas;
};