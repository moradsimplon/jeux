function jouer() {


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
  console.log("égalité");
}
else if(a==="pierre" && b==="papier"){
  console.log("l'ordi gagne");
}
else if(a==="ciseaux" && b==="papier"){
  console.log("Tu gagne");
}
else if(a==="papier" && b==="pierre"){
  console.log("Tu gagne");
}
else if(a==="papier" && b==="ciseaux"){
  console.log("L'ordi gagne");
}
else if(a==="ciseaux" && b==="pierre"){
  console.log("L'ordi gagne");
}
else if(a==="ciseaux" && b==="papier"){
  console.log("Tu gagne");
}
else if (a === "" || a !== "pierre" || a !== "feuille" || a !== "ciseaux") {
console.log("Entre une réponse, correct");
}
}
