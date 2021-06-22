
const Todo = require('../models/todos')
const user = require('../models/user')


const create = (data) => {
    //call database
  return  Todo.create(data).catch(console.log)
}

 const findAll = ()=>
 {
     return Todo.findAll()
 }

 const findbyid = (id)=>
 {
     return Todo.findOne({
         where: {id} , include : 'user'
     })
 }

 const editbyid =(id , data)=>
 {
     return Todo.update(data ,{where : {id}})
 }

 const deletbyid = (id) =>
 {
     return Todo.destory({where : {id}})
 }

module.exports = {
    create ,findAll , findbyid , editbyid , deletbyid
}