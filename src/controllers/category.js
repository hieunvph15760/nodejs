import Category from '../models/category';
import slugify from 'slugify';
import Product from '../models/product';
export const create = async (req,res)=>{
    req.body.slug = slugify(req.body.name);
    try {
        const category = await  new Category(req.body).save();
        res.json(category)
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được danh mục"
        })
    }
}
export const getAll = async (req,res)=>{
   try {    
    const category = await Category.find({}).exec();
    res.json(category)
   } catch (error) {
       res.status(400).json({
           error:"Không tìm thấy danh mục"
       })
   }
}
export const read = async (req,res)=>{
    try {
        const category = await Category.findOne({slug:req.params.slug}).exec();
        const products = await Product.find({category:category}).populate('category').select('-category').exec();
        res.json({
            category,products
        })
    } catch (error) {
        res.status(400).json({
            error:"Không tìm thấy !"
        })
    }
}