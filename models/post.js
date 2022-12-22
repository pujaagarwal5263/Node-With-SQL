var Sequelize=require("sequelize");
var sequelize=require("../util/database")

const Post=sequelize.define("post",{
    name: Sequelize.DataTypes.STRING,
    title:Sequelize.DataTypes.STRING,
    content:Sequelize.DataTypes.STRING,
    user_id:Sequelize.DataTypes.INTEGER
})

module.exports=Post;