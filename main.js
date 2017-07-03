function game() {


var a=prompt("Jouer");
var b = Math.floor((Math.random() * 3) + 1);

if(b==1){
  b="pierre";
} else if (b==2){
   b="papier";
} else {
  b="ciseaux";
}


if(a==b){
  alert("égalité");
}
else if(a==="pierre" && b==="papier"){
  alert("l'ordi gagne");
}
else if(a==="ciseaux" && b==="papier"){
  alert("Tu gagne");
}
else if(a==="papier" && b==="pierre"){
  alert("Tu gagne");
}
else if(a==="papier" && b==="ciseaux"){
  alert("L'ordi gagne");
}
else if(a==="ciseaux" && b==="pierre"){
  alert("L'ordi gagne");
}
else if(a==="ciseaux" && b==="papier"){
  alert("Tu gagne");
}
else if (a === "" || a !== "pierre" || a !== "feuille" || a !== "ciseaux") {
alert("Entre une réponse, correct");
}
}
