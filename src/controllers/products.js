import Product from '../models/product';
import slugify from 'slugify';

export const get = async(req, res) => {
    try {
        const product = await Product.findOne({slug:req.params.slug}).exec();
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
        const product = await Product.findOneAndDelete({ slug:req.params.slug }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Xóa san pham khong thanh cong !"
        })
    }
}
export const update = async(req, res) => {
    req.body.slug = slugify(req.body.name);
    try {
        const product = await Product.findOneAndUpdate({ slug:req.params.slug }, req.body, { new: true }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Update sản phẩm không thành công !"
        })
    }
}