const User = require("../models/user");
const Post=require("../models/post");
const Tag = require("../models/tags");
const sequelize = require("../util/database");

var crudOperation=async(req,res)=>{
    //insert 
    //let data= await User.create({name:"shreya", email:"shreya@gmail.com",password:"2345",contact:125644});

    //update
    // let data=await User.update({name:"Aditya"},{
    //     where:{
    //         id:2
    //     }
    // })

    //delete
    // let data=await User.destroy({
    //     where:{
    //         id:2
    //     }
    //   truncate: true
    // })

    //bulk data insertion
    let data=await User.bulkCreate([
        {name: "Puja", email:"puja@gmail.com",contact:2342422,password:"23232"},
        {name: "shreay", email:"shreay@gmail.com",contact:2342422,password:"23232"}, 
        {name: "riya", email:"riya@gmail.com",contact:2342422,password:"23232"},
        {name: "aditya", email:"aditya@gmail.com",contact:2342422,password:"23232"}
    ])

    //read
    //let data=await User.findAll({});
    // let data=await User.findOne({
    //     where:{
    //         name:"Puja"
    //     }
    // });
     res.json({msg:data})
}

var queryData=async(req,res)=>{
    // let data= await User.create({name:"shreya", email:"shreya@gmail.com",password:"2345",contact:125644},{
    //     fields: ["name","email","password"]
    // });

    let data= await User.findAll({
        attributes:["name","email" ]
    })
    res.json({msg:data})
}

var onetoone=async(req,res)=>{
    let data=await User.findAll({
        attributes:["name","email"],
        include:[{
            model:Post,
            attributes:["title","content"]
        }],
        where:{id:1}
    })
    res.send(data)
}

var belongsTo=async(req,res)=>{
   let data=await Post.findAll({
    attributes:["title","content"],
    include:[{
        attributes:["name","email","contact"],
        model:User
    }]
   });
   res.json(data)
}

var manytomany=async(req,res)=>{
    // ---- post to tag association
    let data=await Post.findAll({
        attributes:["title","content"],
        include:[{
            attributes:["name"],
            model:Tag
        }]
       });
    // ---- tag to post association
    let data1=await Tag.findAll({
        attributes:["name"],
        include:[{
            model:Post,
            attributes:["title","content"]
        }]
    })
    
       res.json(data)
}

var scopes=async(req,res)=>{
   let data=await User.scope('checkGender').findAll({
    //att:["Name","Gender"]
   });

   res.json(data)
}

var transaction=async(req,res)=>{
    var t=await sequelize.transaction();
    try{
      const user= await User.create({name:"Abc",email:"puja@abc.com",password:"regfier",Gender:"F", contact:65765676},{
        transaction: t
      })
      t.commit();
    }catch(err){
      t.rollback()
    }
    res.json("user");
}
module.exports={crudOperation, queryData, onetoone, belongsTo, manytomany, scopes,transaction};