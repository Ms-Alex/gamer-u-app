const mongoose = require('mongoose');
const { Schema } = mongoose;

// RELATIONSHIP STATUS CODES:
// 0 - NONE
// 1 - PENDING
// 2 - FRIENDS
// USERONE = CREATED REQUEST, RECEIVED REQUEST

const relationshipSchema = new Schema({
    userOne: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    userTwo: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: Number,
        default: 0
    }
});

mongoose.model('relationships', relationshipSchema);