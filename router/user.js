const express = require("express")
const { createUser, getUsers,getUser,updateUser,deleteUser } = require("../controller/user")

const router = express.Router()

router.post("/register",createUser)
router.get("/",getUsers)
router.get("/:id",getUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)



module.exports = router