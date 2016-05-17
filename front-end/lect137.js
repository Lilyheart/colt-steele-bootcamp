var scorePlayer1 = 0;
var scorePlayer2 = 0;
var winScore = 5;

document.querySelectorAll("button")[0].addEventListener("click", function() {
    scorePlayer1++;
    scored(scorePlayer1, document.getElementById("score1"));
});
document.querySelectorAll("button")[1].addEventListener("click", function() {
    scorePlayer2++;
    scored(scorePlayer2, document.getElementById("score2"));
});
document.querySelectorAll("button")[2].addEventListener("click", resetScore);
document.querySelector("input").addEventListener("change",function(){
    winScore = Number(this.value);
    document.getElementById("win").textContent = winScore;
    resetScore();
});

function scored(playerScore, playerSpan) {
    if (Math.max(scorePlayer1, scorePlayer2) <= winScore) {
        playerSpan.innerHTML = playerScore;
        if (Math.max(scorePlayer1, scorePlayer2) === winScore) {
            playerSpan.classList.add("green");
        };
    };
};
function resetScore() {
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    document.querySelector("h1").innerHTML = "<span id=\"score1\">0</span> to <span id=\"score2\">0</span>";
}
