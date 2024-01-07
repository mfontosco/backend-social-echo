require("dotenv").config()
const express = require("express")
const app = express()
const db = require("./database/models/index")
const userRouter = require("./router/user")
const morgan = require("morgan")

const port = 4000
db.sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
app.use(express.json())
app.use(morgan("dev"))
app.get("/",(req,res)=>{
    res.status(200).json({
        status:"success",
        message:"welcome to backend"
    })
})
app.use("/api/v1/user",userRouter)
app.listen(port,(err)=>{
    if(err){
        throw Error(err)

    }
    console.log(`app is live and running on port ${port}`)
})
