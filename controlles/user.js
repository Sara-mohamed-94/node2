
 const user = require('../models/user')

 const create = (data) => {
     //call database
   return  user.create(data).catch(console.log)
 }
 
  const findAll = ()=>
  {
      return user.findAll()
  }
 
 const findbyid = (id)=>
 {
     return user.findOne({
         where: {id} 
     })
 }

 const editbyid =(id , data)=>
 {
     return user.update(data ,{where : {id}})
 }

 const deletbyid = (id) =>
 {
     return user.destory({where : {id}})
 }

module.exports = {
    create ,findAll , findbyid , editbyid , deletbyid
}