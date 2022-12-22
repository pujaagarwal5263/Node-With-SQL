var Sequelize=require("sequelize");
var sequelize=require("../util/database")

var Tag=sequelize.define("tag",{
    name: Sequelize.DataTypes.STRING
})

module.exports=Tag;