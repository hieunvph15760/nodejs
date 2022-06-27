import Product from '../models/product';
import slugify from 'slugify';

export const get = async(req, res) => {
    try {
        const product = await Product.findOne({_id:req.params.id}).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Lấy sản phẩm không thành công !"
        })
    }
}
export const create = async(req, res) => {
    req.body.slug = slugify(req.body.name);
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Them san pham khong thanh cong !"
        })
    }
}
export const list = async(req, res) => {
    try {
        const product = await Product.find({}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Khong lay san pham khong thanh cong !"
        })
    }
}
export const remove = async(req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id:req.params.id }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Xóa san pham khong thanh cong !"
        })
    }
}
export const update = async(req, res) => {
    try {
        const product = await Product.findOneAndUpdate({ _id:req.params.id }, req.body, { new: true }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Update sản phẩm không thành công !"
        })
    }
}

export const sort = async(req,res) =>{
    const sort = req.query.sort;
    try {
        const product = await Product.find().sort(sort).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error:"Không sắp xếp được !"
        })
    }
}

export const search = async (req,res) =>{
    try {
        const product = await Product.find({$text: {$search:req.query.q}}).exec();
        res.json(product);
    } catch (error) {
        return res.status(400).json({
            error:"Không tìm được sản phẩm !"
        })
    }
}
