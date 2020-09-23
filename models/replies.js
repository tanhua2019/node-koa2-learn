const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: "主键ID",
      field: "id"
    },
    messageId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "messageId"
    },
    content: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "content"
    },
    createtime: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "createtime"
    }
  };
  const options = {
    tableName: "replies",
    comment: "",
    indexes: []
  };
  const RepliesModel = sequelize.define("replies_model", attributes, options);
  return RepliesModel;
};