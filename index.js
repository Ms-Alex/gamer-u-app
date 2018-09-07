const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
// const avatarsMiddleware = require('adorable-avatars');
// ORDER MATTERS: USER MODELS BEFORE PASSPORT
require('./models/User');
require('./services/passport');

const authRoutes = require('./routes/authRoutes')

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(cors());
app.use(bodyParser.json());

// MAKE A COOKIE
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        // ALLOWS US PROVIDE MULTIPLE keys, AND ADDS AN ADDITIONAL LEVEL OF SECURITY VV
        keys: [keys.cookieKey]
    })
);
// HAVE PASSPORT HANDLE COOKIE
app.use(passport.initialize());
app.use(passport.session());

// CALL THIS AFTER SETTING COOKIES AND PASSPORT LOGIN SETTINGS
authRoutes(app);

// let router = express.Router();
// app.use('/myAvatars', avatarsMiddleware);

const port = process.env.PORT || 5000;
// PORT ALSO REFERENCED IN PASSPORT.JS
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});