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
    console.log("You Pressed Right");
    removeBackground(playerPress);
    Alphabet();
  } else {
    console.log("You pressed wrong");
  }
}
