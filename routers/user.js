

const express =require('express');
const users = require('../controlles/user')

const router =express.router()

router.post('/',async (req ,res  ) => 
{
   const {body} = req ;
  await users.create(body);
   res.status(204).end();

})
router.get('/', async(req ,res) => 
{
     const  Allusers = await users.findAll()
      res.json(Allusers)
})
router.get('/:id',async (req ,res) => 
{
    const{id} = req.params
    const user  = await users.findbyid()
      if(!user)
      {
          res.status(204).end 
          return
      }
      res.json(user)
})

router.patch('/:id', async(req ,res) => 
{
      const { body ,params :{id}} = req
      await users.editbyid(id , body)
      res.status(204).end()

})
router.Delete('/:id', async(req ,res) => 
{
     const {id} = req.params
     await users.deletbyid(id)
     res.status(204).end()

})


module.exports = router ;