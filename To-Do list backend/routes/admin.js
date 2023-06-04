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
        res.send('task added to database')
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

router.delete('/:id', (req, res, next) => {
  const taskId = req.params.id;
  Task.findByPk(taskId)
    .then(product => {
      if (product) {
        return product.destroy()
          .then(() => {
            console.log('Task destroyed');
            res.sendStatus(200);
          })
          .catch(err => {
            console.log(err);
            res.status(500).send('An error occurred');
          });
      } else {
        res.status(404).send('Task not found');
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('An error occurred');
    });
});

module.exports=router;