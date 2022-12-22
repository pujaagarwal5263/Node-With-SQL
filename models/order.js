var Sequelize=require("sequelize");
var sequelize=require("../util/database")

const Hotel= sequelize.define("hotel",{
    hotel_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    address:{
        type: Sequelize.STRING,
        allowNull:false
    },
    description:{
        type: Sequelize.STRING,
        allowNull:false
    },
    contact:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    numOfReviews:{
        type: Sequelize.INTEGER,
    },
    
    floors:{
        type:Sequelize.INTEGER
    },
    city:{
        type:Sequelize.STRING
    },
    state:{
        type:Sequelize.STRING
    },
    country:{
        type:Sequelize.STRING
    },
    amenities:{
        type:Sequelize.STRING
    },
    instructions:{
        type:Sequelize.STRING
    },
    how_to_reach:{
        type:Sequelize.STRING
    }
})

module.exports=Hotel;