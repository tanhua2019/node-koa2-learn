const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
     
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    name: {
      type: DataTypes.STRING(500),
      allowNull: false,
     
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name"
    },
    typeId: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
     
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "typeId"
    },
    img: {
      type: DataTypes.STRING(2000),
      allowNull: true,
     
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "img"
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: true,
     
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "desc"
    },
    updatetime: {
      type: DataTypes.DATEONLY,
      allowNull: false,
     
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updatetime"
    },
    createtime: {
      type: DataTypes.DATEONLY,
      allowNull: false,
     
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "createtime"
    }
  };
  const options = {
    tableName: "goods",
    comment: "",
    indexes: []
  };
  const GoodsModel = sequelize.define("goods_model", attributes, options);
  return GoodsModel;
};