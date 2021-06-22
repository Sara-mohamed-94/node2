
const express = require('express') ;

const router =require('./routers')

 const app = express() //create instance from express 
 app.use(express.json())
 app.use('/' ,router) ;
 






 app.listen(3000 , ()=>
 {
     console.log('up and Running ') ;
 });

