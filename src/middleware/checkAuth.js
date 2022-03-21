export const checkAuth = (req, res, next) => {
    const check = true;
    if (check) {
        next();
    } else {
        res.redirect('/');
    }
}