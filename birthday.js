
function openCard(){
    var confettiSettings = { target: 'my-canvas' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    document.getElementById("my-canvas").classList.add('active');
    document.getElementById("start").style.display = "none";
    document.getElementById("button").style.display = "none";
    document.getElementById("card").style.display = "flex";
}