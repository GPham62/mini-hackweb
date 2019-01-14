const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use("/public",express.static("public"));
mongoose.connect("mongodb://localhost:27017/scorekeeper-17", {useNewUrlParser: true}, (err) =>{
    if (err) console.log("DB cant connect" + err);
    else console.log("DB connect success!");
})

const PlayerModel = require('./models/playerModel');

app.use(bodyParser.urlencoded({extended: false}));

app.post("/api/addnew", (req, res)=> {
    console.log(req.body);
    PlayerModel.create({
        player: {player1: req.body.player1, player2: req.body.player2, player3: req.body.player3, player4: req.body.player4 },
        player1: {round: 1, score: 0},
        player2: {round: 1, score: 0},
        player3: {round: 1, score: 0},
        player4: {round: 1, score: 0},
    }, (err, playersList) => {
        if (err) console.log(err)
        else {
            res.send({playersList : playersList});
        }
    })
});

app.get("/api/getScore/:id", (req,res)=> {
    PlayerModel.findById(req.params.id, function(err, gameFound){
        if (err) console.log(err)
        else res.send({gameFound: gameFound})
    })
});

app.get("/api/SaveScore/:gameId", (req, res) =>{
    PlayerModel.findById(req.params.id, function(err, gameFound){
        if(err) console.log(err)
        else {
            gameFound.player1[0].score = req.body.r1p1;
            gameFound.player2[0].score = req.body.r1p2;
            gameFound.player3[0].score = req.body.r1p3;
            gameFound.player4[0].score = req.body.r1p4;
            gameFound.save((err)=>{
                if (err) console.log(err)
                else res.send({message: "Success"});
            })
        }
    })
})

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/view/addPlayer.html");
});

app.get("/games/:gameId",(req,res)=>{
    res.sendFile(__dirname + "/view/playerScreen.html")
});

app.listen(8080, (err) =>{
    if (err) console.log("Server can't start" + err);
    else console.log("Server start success!");
});