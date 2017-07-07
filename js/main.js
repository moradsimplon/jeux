
  var choixuser="";
function choix(x){
choixuser=x;
//document.getElementById('demo').innerHTML =  choixuser;
if (choixuser=="ciseaux"){
document.getElementById("feuille").style.display = "none";
document.getElementById("pierre").style.display = "none";
}
else if (choixuser=="feuille") {
  document.getElementById("ciseaux").style.display = "none";
  document.getElementById("pierre").style.display = "none";

}
else {
  document.getElementById("ciseaux").style.display = "none";
  document.getElementById("feuille").style.display = "none";
}
}



function game() {


var a=prompt("Jouer");
var b = Math.floor((Math.random() * 3) + 1);


if(b==1){
  b= "papier";
} else if (b==2){
   b="pierre";
} else {
  b="ciseaux";
}


document.getElementById('id').innerHTML="l'ordinateur joue" + " " + b


if(a==b){
  document.getElementById('image').src = "img/egalite.gif";
}
else if(a==="pierre" && b==="papier"){
  document.getElementById('image').src = "img/perdu.gif";
}
else if(a==="ciseaux" && b==="papier"){
  document.getElementById('image').src = "img/gagne.gif";
}
else if(a==="papier" && b==="pierre"){
  document.getElementById('image').src = "img/gagne.gif";
}
else if(a==="papier" && b==="ciseaux"){
  document.getElementById('image').src = "img/perdu.gif";
}
else if(a==="ciseaux" && b==="pierre"){
  document.getElementById('image').src = "img/perdu.gif";
}
else if(a==="ciseaux" && b==="papier"){
  document.getElementById('image').src = "img/gagne.gif";
}
else if (a === "" || a !== "pierre" || a !== "papier" || a !== "ciseaux") {
alert("Entre une réponse, correct");
}
}
