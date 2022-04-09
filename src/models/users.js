import mongoose from "mongoose";
import {createHmac} from 'crypto';
import { v4 as uuidv4 } from "uuid";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    salt:{
        type:String
    },
    role:{
        type:Number,
        default:0
    }
},{timestamp:true});

userSchema.methods = {
    authenticate(password){
        return this.password == this.encrypPassword(password);
    },
    encrypPassword(password){
        if(!password) return;
        try {
            return createHmac('sha256',this.salt).update(password).digest('hex');
        } catch (error) {
            console.log(error);
        }
    }
}

userSchema.pre("save", function(next){
    try {
        this.salt = uuidv4();
        this.password = this.encrypPassword(this.password);
         return next();
    } catch (error) {
        return next(error);
    }
})

export default mongoose.model("User",userSchema);