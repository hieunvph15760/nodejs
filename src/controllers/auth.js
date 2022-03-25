import Users from "../models/users";
import jwt from "jsonwebtoken";

export const signup = async (req,res) =>{
    try {
    const {name,email,password} = req.body;
    const exisUser = await Users.findOne({email}).exec();
    if(exisUser){
        res.json({
            message:"Email đã tồn tại, vui lòng đăng ký email !"
        })
    }
    const user = await new Users({name,email,password}).save();
    res.json({
        user:{
            _id:user.id,
            name:user.name,
            email:user.email
        }
    })
    } catch (error) {
        res.json(400).json({
            message:"Khong tao duoc tai khoan"
        })
    }
}

export const signin = async (req,res) =>{
    const { email, password} = req.body;
    const user = await Users.findOne({email}).exec();
    if(!user){
        res.json({
            message: "User không tồn tại"
        })
    }
    if(!user.authenticate(password)){
        res.status(401).json({
            message: "Mật khẩu không đúng"
        })
    }
    const token = jwt.sign({email},"123456",{expiresIn: 60 * 60});
    res.json({
        token,
        user:{
            _id:user.id,
            email:user.email,
            name:user.name
        }
    })
}