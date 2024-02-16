function hideSection(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showSection(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function findAlphabet() {
  const alphaString = "abcdefghijklmnopqrstuvwxyz";
  const ahph = alphaString.split("");
  const rannum = Math.random() * 25;
  const index = Math.round(rannum);
  const alpha = alphaString[index];
  return alpha;
}
function backgroundSet(element) {
  document.getElementById(element).classList.add("bg-orange-400");
}
function removeBackground(element) {
  document.getElementById(element).classList.remove('bg-orange-400');
}


function oldScore(elementId){
  const a = document.getElementById(elementId);
  const b = a.innerText;
  const c = parseInt(b);
  return c;
}
function www(){
       console.log(lastSelectedElement);
      removeBackground(lastSelectedElement);
      hideSection('playground');
      showSection('score');
      removeBackground(lastSelectedElement);
      const abdul = document.getElementById('score-update');
      const badul = abdul.innerText;
      const f = document.getElementById('final-score');
      f.innerText = badul;
}