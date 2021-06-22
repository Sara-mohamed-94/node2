
const express = require('express')
const todos = require('../controlles/todos')
const router =express.router()

const todosrouter = require('./todos') 
const userrouter = require('./user') 

router.use('./todos' ,todosrouter)
router.use('./user' ,userrouter)

module.exports =router 