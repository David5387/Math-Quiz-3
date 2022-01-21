player1name = localStorage.getItem("Name1");
player2name = localStorage.getItem("Name2");

document.getElementById("label1").innerHTML = player1name + ": ";
document.getElementById("label2").innerHTML = player2name + ": ";

score1 = 0;
score2 = 0;

document.getElementById("score1").innerHTML = score1;
document.getElementById("score2").innerHTML = score2;

document.getElementById("Player_)Question").innerHTML = "Question Turn : " + player1name;
document.getElementById("player_)Answer").innerHTML = "Answer Turn : " + player2name;

function makeword(){

    getword = document.getElementById("inputcake2000").value;
    getLower = getword.toLowerCase();

    charAt1 = getLower.charAt(1);
    console.log(charAt1);

    increase =  Math.floor(getLower.length/2);
    charAt2 = getLower.charAt(increase);
    console.log(charAt2);
    
    decrease = getLower.length - 1;
    charAt3 = getLower.charAt(decrease);
    console.log(charAt3);

    replace_charAt1 = getLower.replace (charAt1, "_");
    replace_charAt2 = replace_charAt1.replace(charAt2, "_");
    replace_charAt3 = replace_charAt2.replace(charAt3, "_");
    console.log(replace_charAt3);

    question = "<h4>Q: " + replace_charAt3 + "</h4>";
    answer = "<br> Answer: <input id = 'input3'>";
    button = "<br> <br><button onclick = 'check()' class = 'btn btn-success'>Check</button>";
    document.getElementById("divcake").innerHTML = question + answer + button;
    
    
    }
    questionTurn = "player1";
    answerTurn = "player2";

    function check(){
getWordNow = document.getElementById("inputcake2000").value;

store = getWordNow.toLowerCase();
if(store == getLower){
score1 = score1 + 1;
document.getElementById("score1").innerHTML = score1;
}else{
score2 = score2 + 1;
document.getElementById("score2").innerHTML = score2;
}
}