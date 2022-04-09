import mongoose, {ObjectId} from 'mongoose';
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type:String
    },
    sale:{
        type:Number
    },
    status:{
        type:Number
    },
    category: {
        type: ObjectId,
        ref:"Category"
    }
}, { timestamp: true })

// slug:{
//     type:String,
//     unique:true,
//     lowercase:true,
//     index:true
// },

productSchema.index({name:'text'});

const Products = mongoose.model('Product', productSchema);

Products.createIndexes({name:'text'})

export default Products 