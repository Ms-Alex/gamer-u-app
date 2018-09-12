const mongoose = require('mongoose');

const Relationship = mongoose.model('relationships')

module.exports = app => {

    app.get('/api/relationsips', async (req, res) => {
        let users = await User.find({ inGame: true });
        // let users = await User.find({ inGame: true })
        res.send(users);
    })

    app.patch('/api/relationships/:id', (req, res) => {
        let id = req.params.id;

        let body = {
            inGame: req.body.inGame
        }

        User.findByIdAndUpdate(id, { $set: body }, { new: true }).then(data => res.send(data))
    })


};