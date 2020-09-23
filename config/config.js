const db = require('./db')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(db.dataBase,db.user,db.pwd,{
  localhost: db.localhost,
  dialect: db.sql,
  define: {
    timestamps: false
  }
})

sequelize.authenticate().then(res => {
  console.log('连接数据库成功');
})

sequelize.sync()

module.exports = sequelize;