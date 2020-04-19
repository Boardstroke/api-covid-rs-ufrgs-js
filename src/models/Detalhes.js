module.exports = (sequelize, DataType) => {
  const Detalhes = sequelize.define('Detalhes',{
    empresa: DataType.STRING,
    frequencia: DataType.ARRAY(DataType.STRING),
    horario_saida: DataType.STRING,
    horario_chegada: DataType.STRING
  });

  Detalhes.associate = function(models){
    models.Detalhes.belongsTo(models.Linhas,{
      foreignKey: {
        name: 'lid',
        as: 'detalhes',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };
  return Detalhes;
};