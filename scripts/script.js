function play() {
  hideSection("home");
  showSection("playground");
  Alphabet();
}
function playNow() {
  hideSection('score');
  showSection("playground");
  const lifee = document.getElementById('life-score');
  lifee.innerText = 5;
  const life = document.getElementById('score-update');
  life.innerText = 0;
  Alphabet();
}
function Alphabet() {
  const answer = findAlphabet();
  document.getElementById("ss").innerText = answer;
  backgroundSet(answer);
}
let lastSelectedElement;
document.addEventListener("keyup", keyEventHandle);
function keyEventHandle(event) {
  const playerPress = event.key;
  if(playerPress === 'Escape'){
    www();
  }
  const screen = document.getElementById("ss");
  const screenValue = screen.innerText;
  lastSelectedElement = screenValue;
  if (screenValue === playerPress) {
    const newScore = oldScore("score-update") + 1;
    const oldScoreElement = document.getElementById("score-update");
    oldScoreElement.innerText = newScore;
    removeBackground(playerPress);
    Alphabet();
  } else {
    const newScore = oldScore("life-score") - 1;
    const oldScoreElement = document.getElementById("life-score");
    oldScoreElement.innerText = newScore;
    if (newScore === 0) {
       www();
    }
  }
}
