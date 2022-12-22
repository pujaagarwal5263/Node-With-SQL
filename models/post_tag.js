var Sequelize=require("sequelize");
var sequelize=require("../util/database")

var Post_tag=sequelize.define("post_tag",{
    postId:Sequelize.DataTypes.INTEGER,
    tagId:Sequelize.DataTypes.INTEGER
},{timestamps: false});

module.exports=Post_tag;