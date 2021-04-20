const  app = require('express')
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('AUTHEN', 'mi', 'miadmin', {
	host: '192.168.5.2',
	dialect: 'mssql'
});

const route = app.Router()

route.post("/",(req, res)=>{
	const {id, name} = req.body
	res.json({id, name}).status(200)
})

route.get("/:emp_id/:salary",(req, res)=>{
	const {emp_id, salary} = req.params
	res.json({name: "somchai", emp_id , salary})
})

route.get("/:emp_id",async (req, res)=>{
	// sequelize.query("SELECT emp_id FROM user_account WHERE user_id=1 ")
	// .then(([[data]])=>{
		// console.log(data.emp_id)
		// sequelize.query("SELECT user_name FROM user_account WHERE emp_id='"+data.emp_id+"' " )
		// .then(([[data]])=>{
			// res.json({id:data.emp_id,data})
		// })
	// }).catch(()=>{
		// res.json({success: false})
	// })
	
	
	// const [[results], metadata] = await sequelize.query("SELECT * FROM user_account WHERE user_id=1");
	// sequelize.query("SELECT user_name FROM user_account WHERE emp_id='"+results.emp_id+"' " )
	// .then(([[data]])=>{
		// res.json({data})
	// }).catch(()=>{
		// res.json({success: false})
	// })
	
	const [[results], metadata] = await sequelize.query("SELECT * FROM user_account WHERE user_id=1");
	const [[data]] = await sequelize.query("SELECT user_name FROM user_account WHERE emp_id='"+results.emp_id+"' " )
	res.json({data})
	
})


module.exports = route