const express=require("express");

const router=express.Router();
const {crudOperation,queryData, onetoone, belongsTo, manytomany, scopes,transaction}=require("../controllers/controller")

router.get("/data",crudOperation)
router.get("/query",queryData)
router.get("/onetoone",onetoone)
router.get("/belongsto",belongsTo)
router.get("/manytomany",manytomany)
router.get("/scopes",scopes)
router.get("/transaction",transaction)

module.exports=router;