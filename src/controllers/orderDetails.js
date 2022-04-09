import OrderDetails from "../models/orderDetails";

export const create = async (req,res) => {
    try {
        const orderdetails = await new OrderDetails(req.body).save();
        res.json(orderdetails);
    } catch (error) {
        res.status(400).json({
            error:"Không thêm được !"
        })
    }
}