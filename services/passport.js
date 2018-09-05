const passport = require('passport');
const steamStrat = require('passport-steam').Strategy;
const mongoose = require('mongoose');

let keys = require('../config/keys');

const User = mongoose.model('users');

// WILL PASS IN USER INSTANCE AFTER LOGIN OR SIGNUP, TO PASSPORT TO SERIALIZE IT AND CREATE A TOKEN
passport.serializeUser((user, done) => {
    done(null, user.steamId);
});

// TOKEN COMES FROM CLIENT END, AND PASSPORT WILL DESERIALIZE IT TO GET USER MODEL
passport.deserializeUser((steamId, done) => {
    User.findOne({ steamId })
        .then((user) => {
            done(null, user);
        })
});


passport.use(
    new steamStrat({
        returnURL: 'http://localhost:5000/auth/steam/return',
        // realm: 'http://localhost:5000/',
        apiKey: keys.steamAPIKey
    },
        async (identifier, profile, done) => {
            // vv RESULTS IN https://steamcommunity.com/openid/id/76561198417983255
            // console.log(identifier);
            // vv GIVES ME USER'S STEAM ID
            // console.log(profile.id);

            const existingUser = await User.findOne({ steamId: profile.id });
                
            if (existingUser) {
                done(null, existingUser);
            } else {
                const user = await new User({ 
                    steamId: profile.id,
                    username: profile.displayName,
                    avatar: profile._json.avatar
                }).save();
                done(null, user);
            }
            
        }
        //, function (identifier, profile, done) {
        //     console.log(profile)
        //     User.findByOpenID({ openId: identifier }, function (err, user) {
        //         return done(err, user);
        //     });
    ));

    