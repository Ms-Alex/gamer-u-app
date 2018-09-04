const passport = require('passport')

// AUTH ROUTE HANDLERS

module.exports = app => {

    app.get('/auth/steam', passport.authenticate('steam', (req, res) => {
        // The request will be redirected to Steam for authentication, so
        // this function will not be called.
    }));

    app.get('/auth/steam/return', passport.authenticate('steam', { failureRedirect: '/login' }));

    app.get('/api/logout', (req, res) => {
        // LOUGOUT() COMES FROM passport. IT JUST KILLS THE COOKIE
        req.logout();
        // PROVES SUCCESSFUL LOGOUT. WILL Request.USER WILL BE UNDEFINED
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};