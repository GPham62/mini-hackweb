$("#form-submit").on("submit",function(event) {
    event.preventDefault();
    $.ajax({
        url:"/api/addnew",
        type: "POST",
        data: {player1:$("#player1").val(), player2: $("#player2").val(),  player3: $("#player3").val(),  player4: $("#player4").val()},
        success: function(data) {
            window.location.href = "/games/" + data.playersList._id;
        },
        error: function(err) {
            console.log(err);
        }
    })

});