const {User} = require("../database/models/index")

const createUser = async(req,res)=>{
    const {first_name,last_name,email,password}=req.body
    
    try {
        if(!first_name || !last_name ||!email ||!password){
            res.status(400).json({
                message:"first_name,last_name,email and password must be provided"})
        }
        const user ={
            first_name,
            last_name,
            email,
            password
        }
        const userCreated = await User.create(user)
        res.status(201).json({
            status:"success",
            message:"user created successfully",
            userCreated
        })
    } catch (error) {
        throw Error(error)
    }
}
const getUsers =async(req,res)=>{
    try {
        const users = await User.findAll()
        res.status(200).json({
            status:"success",
            message:"successfully fetched",
            users
        })
    } catch (error) {
        throw Error(error)
    }
}
const getUser = async(req,res)=>{ 
    const {id} = req.params
    try {
        const user = await User.findOne({
            where:{id}
        })
        if(!user){
            res.status(404).json({
                status: "failed",
                message:"user not found"
            })
        }
        res.status(200).json({
            status:"success",
            message:"user successfully fetched",
            user
        })
    } catch (error) {
        throw Error(error)
    }
}
const updateUser =async(req,res)=>{
    const {first_name,last_name,email,password} =req.body
    const id=req.params.id
    try{
        const user =await User.findOne({
            where:{id}
        })
        if(!user){
            throw Error("user not found")
            return
        }
        if(first_name){
            user.first_name =first_name
        }
        if(last_name){
            user.last_name =last_name
        }
        if(email){
            user.email = email
        }
        user.save()
        res.status(201).json({
            status: "success",
            message:"user updated successfully",
            user
        })
    }catch(error){
        throw Error(error)
    }
}
const deleteUser = async(req,res)=>{
    const id = req.params.id;
    try{
        let user = await User.destroy({where:{id}});
        if (!user) {
            res.status(404).json({message:'The user with the given ID does not exist!'})
            return
            }
            res.status(204).json({
                status:"success",
                message:`Deleted user with id ${id}`})
    }catch(error){
        console.log("error",error)
        throw  Error(error)
    }
}
module.exports = {createUser,getUsers,getUser,updateUser,deleteUser}