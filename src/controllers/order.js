import Order from "../models/order.js";
import OrderDetails from "../models/orderDetails.js";

export const create = async (req,res) =>{
    try {
        const order = await new Order(req.body).save();
        res.json(order);
    } catch (error) {
        res.status(400).json({
            error:"Không thêm được order"
        })
    }
}

export const read = async (req,res) =>{
    try {
        const order = await Order.findOne({_id:req.params.id}).exec();
        const orderDetails = await OrderDetails.find({order:order}).populate('order').select('-order').exec();
        res.json({
            order,orderDetails
        })
    } catch (error) {
        res.status(400).json({
            error:"Không lấy được sản phẩm !"
        })
    }
}

export const get = async (req,res) =>{
    try {
        const order = await Order.find({}).exec();
        res.json(order);
    } catch (error) {
        res.json({
            error:"Không lấy được order !"
        })
    }
}