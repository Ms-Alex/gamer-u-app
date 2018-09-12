const mongoose = require('mongoose');

const User = mongoose.model('users')

module.exports = app => {

    app.get('/api/users', async (req, res) => {
        let users = await User.find({ inGame: true });
        // let users = await User.find({ inGame: true })
        res.send(users);
    })

    app.get('/api/users/:id', (req, res) => {
        let id = req.params.id

        User.findById(id).then( data => res.send(data) )
    })

    app.patch('/api/users/:id', (req, res) => {
        let id = req.params.id;

        let body = {
            inGame: req.body.inGame
        }
        
        User.findByIdAndUpdate(id, {$set: body}, {new: true}).then(data => res.send(data))
    })


};