function game() {


var a=prompt("Jouer");
var b = Math.floor((Math.random() * 3) + 1);
var pierre = document.getElementById('pierre');
pierre.src= "téléchargement.jpg";
if(b==1){
  b= pierre;
} else if (b==2){
   b=pierre;
} else {
  b=pierre;
}

console.log(b);
document.getElementById('id').innerHTML="l'ordinateur joue" + " " + b

if(a==b){
  document.getElementById('image').src = "source.gif";
}
else if(a==="pierre" && b==="papier"){
  document.getElementById('image').src = "source.gif";
}
else if(a==="ciseaux" && b==="papier"){
  document.getElementById('image').src = "source.gif";
}
else if(a==="papier" && b==="pierre"){
  document.getElementById('image').src = "source.gif";
}
else if(a==="papier" && b==="ciseaux"){
  document.getElementById('image').src = "source.gif";
}
else if(a==="ciseaux" && b==="pierre"){
  document.getElementById('image').src = "source.gif";
}
else if(a==="ciseaux" && b==="papier"){
  document.getElementById('image').src = "source.gif";
}
else if (a === "" || a !== "pierre" || a !== "feuille" || a !== "ciseaux") {
alert("Entre une réponse, correct");
}
}
