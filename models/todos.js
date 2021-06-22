
const {DataTypes} = require('sequelize') ;
const user= require('./user')
const sequalize = require('../db') ;

const Todo = sequalize.define('todos' ,{
    content :
    {
      type: DataTypes.STRING 
    }
})
 
  Todo.belongsTo(user)
   Todo.sync({alter : true })

module.exports = Todo ;