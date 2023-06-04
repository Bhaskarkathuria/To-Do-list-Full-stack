const express=require('express');
const sequelize = require('./config/database');
const bodyParser = require('body-parser');
const adminRoutes=require('./routes/admin')

const cors=require('cors')

const app=express();
app.use(cors())
app.use(bodyParser.json());

app.get('/',(req,res,next)=>{
    res.send('server listening on port 5000')
})

app.use('/todotask',adminRoutes)

sequelize.sync()
.then(result=>{
    console.log(result)
    app.listen(5000)
})
.catch(error=>{
    console.log(error)
})
