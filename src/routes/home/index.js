const express=require("express");
const router = express.Router();
const ctrl=require("./home.ctrl");
router.get("/",ctrl.output.index);

router.get("/test",ctrl.output.test);

router.post("/analyze",ctrl.process.analyze);
module.exports=router;