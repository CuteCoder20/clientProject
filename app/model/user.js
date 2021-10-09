const mongoose=require("mongoose")



const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        require:true,
        trim:true
    },
    cpassword:{
        type:String,
        require:true,
        trim:true
    }
})

const userModel=new mongoose.model("User",userSchema);

module.exports=userModel;