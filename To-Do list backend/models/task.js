const Sequelize=require('sequelize');

const sequelize=require('../config/database')

const Task=sequelize.define("TASK",{
    id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    task_name:{
        type: Sequelize.STRING,
        allowNull:false,
       

    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },

    
})

module.exports=Task;