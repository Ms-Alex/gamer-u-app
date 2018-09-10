const passport = require('passport');

// AUTH ROUTE HANDLERS
const feURL = 'http://localhost:3000'

module.exports = app => {

    app.get('/auth/steam', passport.authenticate('steam', (req, res) => {
        // The request will be redirected to Steam for authentication, so
        // this function will not be called.
    }));

    app.get('/auth/steam/return', passport.authenticate(
        'steam', 
        { failureRedirect: `${feURL}/` }), 
        (req, resp) => {
            resp.redirect(`${feURL}/home`);
        }
    );

    app.get('/api/logout', (req, res) => {
        // LOUGOUT() COMES FROM passport. IT JUST KILLS THE COOKIE
        // axios.patch(`/api/users/${req.user._id}`, {inGame: false}).then(() => {
        //     req.logout();
        //     res.redirect(`${feURL}/`);            
        // })
        req.logout();

        // PROVES SUCCESSFUL LOGOUT. WILL Request.USER WILL BE UNDEFINED
        // res.send(req.user);

        res.redirect(`${feURL}/`);
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};