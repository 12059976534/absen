const express=require("express");
const router=express.Router();
const controler = require("../controler/controler")

// router.get("/table",controler.wisata.table)
router.get("/",controler.getdataabsen)
router.post("/absen/:id",controler.createabsen)
router.post("/createmasterlocation",controler.createmasterlocation)
router.get("/getmasterlocation",controler.getmasterlocation)
router.get("/getdataabsen",controler.getdataabsen)
router.post("/login",controler.loginuser)
router.post("/registrasi",controler.registrasi)
router.get("/getuserall",controler.getuserall)
router.post("/deleteuser/:id",controler.deleteuser)

module.exports=router;