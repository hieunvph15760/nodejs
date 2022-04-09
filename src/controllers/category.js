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
        const category = await Category.findOne({_id:req.params.id}).exec();
        const products = await Product.find({category:category}).populate('category').select('-category').exec();
        console.log(products.category);
        res.json({
            category,products
        })
    } catch (error) {
        res.status(400).json({
            error:"Không tìm thấy !"
        })
    }
}

export const remove = async(req,res) =>{
    try {
        const category = await Category.findOneAndDelete({_id: req.params.id}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Không xóa được danh mục !"
        })
    }
}

export const update = async (req,res)=>{
    try {
        const category = await Category.findOneAndUpdate({_id:req.params.id},req.body,{new:true}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error:"Không sửa được danh mục !"
        })
    }
}

