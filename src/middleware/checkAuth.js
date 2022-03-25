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
    console.log(req.auth);
}