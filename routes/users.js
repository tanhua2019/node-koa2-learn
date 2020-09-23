const router = require('koa-router')()
// const userModel = require('../model/userModel')
const UserModel = require('../models/goods')
const sequelize = require('../config/config')
const userModel = UserModel(sequelize)
console.log(userModel,userModel.findAll());
router.prefix('/users')

router.get('/', async (ctx, next) => {
  let a = await userModel.findAll();
  ctx.body = {
    data: a
  }
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
