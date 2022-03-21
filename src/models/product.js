import mongoose, {ObjectId} from 'mongoose';
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    slug:{
        type:String,
        unique:true,
        lowercase:true,
        index:true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        ref:"Category"
    },
    shipping:{
        type:String,
        require:true
    }
}, { timestamp: true })
export default mongoose.model('Product', productSchema);