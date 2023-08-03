

module.exports = (req,res,next) => {
    console.log(req.session);
    res.locals.isLogged = false;
    if (req.session.user) {

    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;

        res.redirect('/user/profile')
    } else {next()}
}