

function clicknow(){
    player1 = document.getElementById("input1").value;
    player2 = document.getElementById("input2").value;
    localStorage.setItem("Name1", player1);
    localStorage.setItem("Name2", player2);
    window.location = ("index1.html");
}

