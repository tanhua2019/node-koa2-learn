# 创建koa2项目
- koa-generator安装  cnpm install -g koa-generator
- koa2 -e 项目名称

## 创建接口
- mysql2 sequelize 安装
- 创建配置文件夹config   创建数据库配置文件db.js 和配置文件config.js
- 通过sequelize.authenticate 判断数据库是否连接成功

### model 数据库表的映射自动生成，也可以自己建 
sequelize指引手册2020(包含自动生成models)[https://blog.csdn.net/yuanfangyoushan/article/details/107737520]
- 安装：npm install sequelize-automate --save
- 在package.json的script中加一条：
```javascript
"scripts": {
    "sequelize-automate": "sequelize-automate -t ts -h localhost -d test -u root -p root -P 3306  -e mysql -o models"
  },
```
- 解释一下上述sequelize-automate 命令的参数含义：
```javascript
–type, -t 指定 models 代码风格，当前可选值：js ts egg midway
–dialect, -e 数据库类型，可选值：mysql sqlite postgres mssql mariadb
–host, -h 数据库 host
–database, -d 数据库名
–user, -u 数据库用户名
–password, -p 数据库密码
–port, -P 数据库端口，默认：MySQL/MariaDB 3306，Postgres 5432，SSQL: 1433
–output, -o 指定输出 models 文件的目录，默认会生成在当前目录下 models 文件夹中
–camel, -C models 文件中代码是否使用驼峰发命名，默认 false
–emptyDir, -r 是否清空 models 目录（即 -o 指定的目录），如果为 true，则生成 models 之前会清空对应目录，默认 false
–config, -c 指定配置文件，可以在一个配置文件中指定命令的参数
```
### 支持ES6语法
- cnpm install babel-core babel-register babel-preset-es2015 -S
- 根目录添加.babelrc 文件 
```javascript
{
  "presets": ["es2015"]
}
```
- 根目录添加index.js文件
```javascript
require('babel-register')
require('./bin/www')
```

