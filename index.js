const express=require("express");
const User=require("./models/user")
const sequelize = require("./util/database");
const Router= require("./routers/index")

const UserTable=require("./models/user");
const PostTable=require("./models/post");
const TagTable=require("./models/tags");
const Post_TagTable=require("./models/post_tag")

const app=express();
app.use(Router);

//Customer.hasMany(Order);

//let customerID=null;

//sync({force: true}) to start from beginning
// sequelize.sync({force: true}).then(result => {
//     return Customer.create({name:"Puja Agarwal", email:"puja@gmail.com"})
   // console.log("Connection successful");
// }).then(customer => {
    //return Order.create({total: 5000})
    // customerID=customer.id;
    // return customer.createOrder({total: 5000})
   // console.log("Customer successfully created", customer);
// }).then(order =>{
    //console.log("Order successfully placed", order);
//     return Order.findAll({where: customerID});
// }).then(orderList =>{
//     console.log("all the orders", orderList);
// })
// .catch(err => {
//     console.log(err);
// })

//one to one
UserTable.hasOne(PostTable,{foreignKey: 'user_id'});
PostTable.belongsTo(UserTable,{foreignKey: 'user_id'});

//one to many
//UserTable.hasMany(PostTable,{foreignKey: 'user_id'});

//many to many
PostTable.belongsToMany(TagTable,{through:"post_tag"})
TagTable.belongsToMany(PostTable,{through:"post_tag"})

//scopes
UserTable.addScope('checkGender',{
    where:{
        gender: "M"
    }
});

sequelize.sync().then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
})
app.listen(3000,()=>{
    console.log("Server is running");
})