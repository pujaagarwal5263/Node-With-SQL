var Sequelize=require("sequelize");

const sequelize=new Sequelize("db-practice","root","Puja@123",{
    dialect:"mysql",
    host:"127.0.0.1",
    logging:false
});

module.exports=sequelize;