import mongoose,{ObjectId} from "mongoose";

const Orderdetail = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    sale:{
        type:Number,
        required:true
    },
    total:{
        type:Number,
        required:true
    },
    order:{
        type: ObjectId,
        ref:"Order"
    }
},{timestamp:true})

export default mongoose.model('Orderdetail',Orderdetail);