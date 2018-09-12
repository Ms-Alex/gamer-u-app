const mongoose = require('mongoose');
const { Schema } = mongoose;

// RELATIONSHIP STATUS CODES:
// 0 - NONE
// 1 - PENDING
// 2 - FRIENDS

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
    },
    whoSent: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    whoRecieved: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

mongoose.model('relationships', realationshipSchema);