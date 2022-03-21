import mongoose from 'mongoose';

const category = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true,
        index:true
    }
}, { timestamp: true })
export default mongoose.model('Category',category)