
const {DataTypes} = require('sequelize') ;
const sequalize = require('../db') ;

const user = sequalize.define('users' ,{
    username :
    {
      type: DataTypes.STRING 
    }
})

user.sync({})

module.exports =user ;