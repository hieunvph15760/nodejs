import res from 'express/lib/response';
import User from '../models/users';

export const userById = async (req,res,next,id)=>{
    try {
        const user = await User.findById(id).exec();
        if(!user){
            return res.status(400).json({
                error:"Khong tim thay user !"
            })
        }

        req.profile = user;
        req.profile.password = undefined;
        req.profile.salt = undefined;

        next();

    } catch (error) {
        console.log(error);
    }
}

export const createUser = async (req,res) =>{
    try {
        const user = await new User(req.body).save();
        res.json(user);
    } catch (error) {
        return res.status(400).json({
            error:"Không thêm được người dùng !"
        })
    }
}

export const getUsers = async (req,res) =>{
    try {
        const users = await User.find({}).exec();
        res.json(users);
    } catch (error) {
        return res.status(400).json({
            error:"Lấy người dùng không thành công !"
        })
    }
}

export const remove = async (req,res) =>{
    try {
        const users = await User.findOneAndDelete({_id:req.params.id}).exec();
        res.json(users);
    } catch (error) {
        return res.status(400).json({
            error:"Không xóa được người dùng !"
        })
    }
}

export const update = async (req,res) =>{
    try {
        const users = await User.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        res.json(users);
    } catch (error) {
        res.status(400).json({
            error:"Không sửa được người dùng !"
        })
    }
}