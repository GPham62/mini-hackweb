$("#btn-add").click(function() {
    const gameId = window.location.pathname.replace("/games/", "");
    $.ajax({
        url: "/api/getScore/" + gameId,
        type: "GET",
        success: function(data){
            console.log(data);
            $(".table tbody").append(
                `
    <tr>
    <th scope="row">${data.gameFound.player1[0].round}</th>
    <td>
        <input type="number" value="${data.gameFound.player1[0].score}" name = "r1p1">
    </td>
    <td>
    <input type="number" value="${data.gameFound.player2[0].score}" name ="r1p2">
    </td>
    <td>
    <input type="number" value="${data.gameFound.player3[0].score}" name="r1p3">
    </td>
    <td>
    <input type="number" value="${data.gameFound.player4[0].score}" name="r1p4">
    </td>
    </tr>`
            );
            $.ajax({
                url: "/api/getScore/" + gameId,
                type: "GET",
                success: function(data){
                    console.log("Success");
                },
                error: function(err){
                    console.log(err);
                }
            })
        },
        error: function(err){
            console.log(err);
        }
    })
});

`<tr>
    <th scope="row" ></th>
    <td>
        <label id=""></label>
    </td>
    <td>
        <label id=""></label>
    </td>
    <td>
        <label id=""></label>
    </td>
    <td>
        <label id=""></label>
    </td>
</tr>`
