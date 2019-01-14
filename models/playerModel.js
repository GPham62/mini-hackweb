const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    player: {type: Array},
    player1: {type: Array},
    player2: {type: Array},
    player3: {type: Array},
    player4: {type: Array},
},{
    timestamps: true,
});

module.exports = mongoose.model("Game", PlayerSchema);