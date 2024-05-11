const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/",{
    dbName:'DhanYatra'
})
.then(()=>{
    console.log("Databse Connected")
}).error((e)=>{console.log(e)})

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String
})


const User = mongoose.model("User", userSchema);

module.exports={
    User
}