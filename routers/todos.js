

const express =require('express');
const todos = require('../controlles/todos')

const router =express.router()

router.post('/', (req ,res) => 
{
   const {body} = req ;
   todos.create(body);
   res.status(204).end();

})
router.get('/', async(req ,res) => 
{
     const  AllTodos = await todos.findAll()
      res.json(AllTodos)
})
router.get('/:id',async (req ,res) => 
{
    const{id} = req.params
    const todo  = await todos.findbyid()
      if(!todo)
      {
          res.status(204).end 
          return
      }
      res.json(todo)
})

router.patch('/:id', async(req ,res) => 
{
      const { body ,params :{id}} = req
      await todos.editbyid(id , body)
      res.status(204).end()

})
router.Delete('/:id', async(req ,res) => 
{
     const {id} = req.params
     await todos.deletbyid(id)
     res.status(204).end()

})


module.exports = router ;