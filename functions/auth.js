function publicAuthorization(req, res, next) {
    if (req.session?.namePerson) {
        next()
    } else {
        res.redirect('/login')
    }
}

module.exports = {publicAuthorization}