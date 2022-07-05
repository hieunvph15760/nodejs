import Users from "../models/users.js";
import jwt from "jsonwebtoken";

export const signup = async (req,res) =>{
    const {name,email,password} = req.body;
    try {
    const exisUser = await Users.findOne({email}).exec();
    if(exisUser){
        return res.status(400).json({
            message:"Email đã tồn tại, vui lòng đăng ký email !"
        })
    }
    const user = await new Users({name,email,password}).save();
    res.json({
        user:{
            _id:user._id,
            name:user.name,
            email:user.email
        }
    })
    } catch (error) {
        return res.json(400).json({
            message:"Khong tao duoc tai khoan"
        })
    }
}

export const signin = async (req,res) =>{
    const { email, password} = req.body;
    const user = await Users.findOne({email}).exec();
    if(!user){
        return res.status(400).json({
            message: "User không tồn tại"
        })
    }
    if(!user.authenticate(password)){
        return res.status(400).json({
            message: "Mật khẩu không đúng"
        })
    }
    const token = jwt.sign({_id:user._id},"123456",{expiresIn: 60 * 60});
    return res.json({
        token,
        user:{
            _id:user._id,
            email:user.email,
            name:user.name,
            role:user.role
        }
    })
}