function play() {
  hideSection("home");
  showSection("playground");
  Alphabet();
}
function Alphabet() {
  const answer = findAlphabet();
  document.getElementById("ss").innerText = answer;
  backgroundSet(answer);
}
document.addEventListener("keyup", keyEventHandle);
function keyEventHandle(event) {
  const playerPress = event.key;
  const screen = document.getElementById("ss");
  const screenValue = screen.innerText;
  if (screenValue === playerPress) {
    const oldScoreElement = document.getElementById('score-update');
    const oldScoreText = oldScoreElement.innerText;
    const oldScore = parseInt(oldScoreText);
    const newScore = oldScore + 1;
    oldScoreElement.innerText = newScore;
    removeBackground(playerPress);
    Alphabet();
  }
  else{
    const oldScoreElement = document.getElementById('life-score');
    const oldScoreText = oldScoreElement.innerText;
    const oldScore = parseInt(oldScoreText);
    const newScore = oldScore - 1;
    oldScoreElement.innerText = newScore;
  }
}
