const express = require("express");
const router = express.Router();
// const {getUsers,getUser,addUser,updateUser,deleteUser}=require("../controllers/user
//     Controller")
// const { verifyToken, verifyAdmin } = require("../utils/verifyToken");
// router.get("/", verifyToken, verifyAdmin, getUsers);
// router.get("/:id", verifyToken, getUser);
// router.post("/", verifyToken, addUser);
// router.put("/:id", verifyToken, updateUser);
// router.delete("/:id", verifyToken, deleteUser);
router.post("/",async (req,res)=>{
console.log(req.body)
})
router.get("/:id",async (req,res)=>{
    console.log(req.params)
    res.send({"data":"send"})
    })
module.exports = router;
