const express = require('express')
const route = require('./route/employee')
const app = express()

app.use(express.json())

app.use('/employee',route)

app.get("/",(req, res)=>{
	res.json({id: 100})
})

app.listen(3000,()=>{
	console.log('Server is running on port 3000');
})

