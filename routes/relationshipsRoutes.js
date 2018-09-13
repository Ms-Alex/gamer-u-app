const mongoose = require('mongoose');

const Relationship = mongoose.model('relationships')

module.exports = app => {

    app.get('/api/relationships', async (req, res) => {
        let relations = await Relationship.find();
        // let users = await User.find({ inGame: true })
        res.send(relations);
    })

    app.post('/api/relationships', (req, res) => {
        const { userOne, userTwo, status } = req.body;

        const relation = new Relationship({
            userOne,
            userTwo,
            status
        })

        relation.save();
    })

    app.patch('/api/relationships/:id', (req, res) => {
        let id = req.params.id

        let body = {
            status: req.body.status
        }

        Relationship.findByIdAndUpdate(id, { $set: body }, { new: true }).then(data => res.send(data))
    })

    app.delete('/api/relationships/:id', (req, res) => {
        let id = req.params.id

        Relationship.findByIdAndRemove(id, function (err) {
            if (err) return next(err);
            res.send('Deleted successfully!');
        })
    })


};