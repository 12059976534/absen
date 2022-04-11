const db = require("../models")

const controler={}

controler.getdataabsen = async (req, res, next)=>{
    try {
        const data= await db.Absen.findAll(
            {
                // include:['user'],
            }
        )

        res.status(200).json({
            message:"succes get data",
            data:data
        })

    } catch (error) {
       next(error)
    }    

}

controler.createabsen = async (req, res, next)=>{
    try {
        const data= await db.Absen.create({
            UserId:req.params.id
        })
        res.status(200).json({
            message:"succes",
            data:data
        })

    } catch (error) {
       next(error)
    }    

}


controler.createmasterlocation = async (req,res,next)=>{
    try {

        const getdata = await db.Master.findOne({
        })

        if(getdata === null){
            const crete = await db.Master.create({
                location:req.body.location
            })
    
            res.status(200).json({
                message:"succes",
                data:crete
            })
        }else{
            const crete = await db.Master.update({
                location:req.body.location
            },{
                where:{
                    id:getdata.id
                  }
            })
    
            res.status(200).json({
                message:"succes update",
                data:crete
            })
        }

        
    } catch (error) {
        next(error)
    }
}

controler.getmasterlocation = async (req,res,next)=>{
    try {
        const data = await db.Master.findOne()

        res.status(200).json({
            message:"master location",
            data:data
        })
    } catch (error) {
        next(error)
    }
}

controler.getuserall = async (req,res,next) =>{
    try {
        const alluser = await db.User.findAll({
            // include:["absen"]
        })
        res.status(200).json({
            message:"all data",
            data:alluser
        })
    } catch (error) {
        next(error)
    }
}



controler.loginuser = async (req,res,next)=>{
    try {
        const data= await db.User.findOne({
            where:{
                username:req.body.username
            }
        })

        if(data != null){
            if(data.password == req.body.password ){
                res.status(200).json({
                    message:"login succes",
                    data:data
                })
            }else{
                res.status(404).json({
                    message:"eror password",
                })
            }
        }else{
            res.status(404).json({
                message:"no user name",
                data:data
            })
        }
       

    } catch (error) {
       next(error)
    } 
}

controler.registrasi = async (req,res,next)=>{
    try {

        const finddata = await db.User.findOne({
            where:{
                username:req.body.username
            }
        })

        if(finddata == null){
            const crete = await db.User.create({
                username:req.body.username,
                password:req.body.password
            })
            res.status(200).json({
                message:"registrasi succes",
                data:crete
            })
        }else{
            res.status(404).json({
                message:"user is redy registered",
            })
        }
        
    } catch (error) {
        next(error)
    }
}


controler.deleteuser = async (req,res,next)=>{
    try {
       const deleteuser = await db.User.destroy({
          where:{
              id:req.params.id
          }
       })
       res.status(200).json({
        message:"delete succes",
        data:deleteuser
    })
    } catch (error) {
        next(error)
    }
}






module.exports = controler