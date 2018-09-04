const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    steamId: String,
    username: String,
    avatar: {
        type: String,
        default: null
    },
    inGame: {
        type: Boolean,
        default: false
    }
});

mongoose.model('users', userSchema);