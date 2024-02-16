function hebi(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function sebi(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden'); 
}
function ran(){
    const alphaString = 'abcdefghijklmnopqrstuvwxyz'
    const ahph = alphaString.split('');
    const rannum = Math.random()*25;
    const index = Math.round(rannum);
    const alpha = alphaString[index];
    return alpha;
}