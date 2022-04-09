import mongoose from "mongoose";

const Order = mongoose.Schema({
    lastname:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true
    }
},{timestamp:true})

export default mongoose.model('Order',Order);