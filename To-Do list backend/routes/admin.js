const express=require('express');
const router=express.Router();
const sequelize=require('../config/database');
const Task = require('../models/task');

router.post('/',(req,res,next)=>{
    Task.create({
        task_name:req.body.task_name,
        description:req.body.description,
        

    })
    .then(result=>{
        res.sendStatus(200).send('task added to database')
    })
    .catch(error=>{
        console.log(error)
    })
})

router.get('/',(req,res,next)=>{
    Task.findAll()
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        console.log(error)
    })
})

router.get('/:id',(req,res,next)=>{
    Task.findAll()
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        console.log(error)
    })
})

router.delete('/:id',(req,res,next)=>{
    const taskid=req.params.id;
    Task.findByPk(taskid)
    .then(product=>{
       return product.destroy()
       .then(res=>{
        console.log('task destroyed')
        
       })
       .catch(err=>{
        console.log(err)
       })
    })
    .catch()
})


module.exports=router;