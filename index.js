const _ = require('lodash')
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const socket = require('socket.io');
const keys = require('./config/keys');

// const avatarsMiddleware = require('adorable-avatars');
// ORDER MATTERS: USER MODELS BEFORE PASSPORT
require('./models/User');
require('./services/passport');

const authRoutes = require('./routes/authRoutes');
const usersRoutes = require('./routes/usersRoutes');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:5000' }));
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
usersRoutes(app);

const port = process.env.PORT || 5000;
// PORT ALSO REFERENCED IN PASSPORT.JS
let server = app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});




let io = socket(server);

io.on('connection', function (socket) {

    console.log(socket.id);

    socket.on('SEND_MESSAGE', function (data) {
        io.emit('RECEIVE_MESSAGE', data);
    })

    // client.on('subscribeToTimer', (interval) => {
    //     console.log('client is subscribing to timer with interval ', interval);
    //     setInterval(() => {
    //         client.emit('timer', new Date());
    //     }, interval);
    // });

    // client.on('register', handleRegister)

    // client.on('join', handleJoin)

    // client.on('leave', handleLeave)

    // client.on('message', handleMessage)

    // client.on('chatrooms', handleGetChatrooms)

    // client.on('availableUsers', handleGetAvailableUsers)

    // client.on('disconnect', function () {
    //     console.log('client disconnect...', client.id)
    //     handleDisconnect()
    // })

    // client.on('error', function (err) {
    //     console.log('received error from client:', client.id)
    //     console.log(err)
    // })
})