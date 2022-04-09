import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
},{timestamp:true});

export default mongoose.model('Contact',contactSchema);