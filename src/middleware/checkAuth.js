import expressJWT from "express-jwt";
export const checkAuth = (req, res, next) => {
    const check = true;
    if (check) {
        next();
    } else {
        res.redirect('/');
    }
}

export const requirseSignin = expressJWT({
    secret:"123456",
    algorithms:["HS256"],
    requestProperty:"auth"
});

export const isAuth = (req,res,next)=>{
    const user = req.profile._id == req.auth._id;
    if(!user){
        return res.status(402).json({
            error: "Ban khong duoc phep truy cap !"
        })
    }
    next();
}

export const isAdmin = (req,res,next) =>{
    if(req.profile.role == 0){
        return res.status(401).json({
            error: "Ban khong phai la admin"
        })
    }
    next();
}