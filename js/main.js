
var a;
var choixuser;
var choiOrdi;
var scoreuser=0;
var scoreordi=0;




function hideOther() {
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

function scoregeneral() {
  if (scoreuser==3){
    document.getElementById('scoregen').src="img/win.gif" ;
    document.getElementById('final').innerHTML="YOU WIN!";


  }
  else if (scoreordi==3) {
    document.getElementById('scoregen').src="img/lose.gif"  ;
    document.getElementById('final').innerHTML="YOU LOSE!";

  }
}

function game(a) {




  choixuser=a;
  hideOther();


var b = Math.floor((Math.random() * 3) + 1);
console.log(b);


if(b==1){
  document.getElementById('ordi').src="img/feuille.png";
  document.getElementById("ordi").style.display = "block";
  choixOrdi = "feuille";
} else if (b==2){
    document.getElementById('ordi').src="img/pierre.png";
      document.getElementById("ordi").style.display = "block";
    choixOrdi="pierre";
} else {
    document.getElementById('ordi').src="img/ciseaux.png";
      document.getElementById("ordi").style.display = "block";
    choixOrdi="ciseaux";
}
console.log(choixOrdi);


if(choixuser==choixOrdi){
  document.getElementById('image').src = "img/egalite.gif";
  document.getElementById("image").style.display = "block";
}
else if(choixuser=="pierre" && choixOrdi=="feuille"){
  document.getElementById('image').src = "img/perdu.gif";
    document.getElementById("image").style.display = "block";
  scoreordi++;
}

else if(choixuser=="pierre" && choixOrdi=="ciseaux"){
  document.getElementById('image').src = "img/gagne.gif";
    document.getElementById("image").style.display = "block";
  scoreuser++;
}

 else if(choixuser=="feuille" && choixOrdi=="pierre"){
  document.getElementById('image').src = "img/gagne.gif";
    document.getElementById("image").style.display = "block";
  scoreuser++;
}
else if(choixuser=="feuille" && choixOrdi=="ciseaux"){
  document.getElementById('image').src = "img/perdu.gif";
    document.getElementById("image").style.display = "block";
  scoreordi++;
}


else if(choixuser=="ciseaux" && choixOrdi=="pierre"){
  document.getElementById('image').src = "img/perdu.gif";
    document.getElementById("image").style.display = "block";
  scoreordi++;
}
else if(choixuser=="ciseaux" && choixOrdi=="feuille"){
  document.getElementById('image').src = "img/gagne.gif";
    document.getElementById("image").style.display = "block";
  scoreuser++;
}

else if (choixuser == "" || choixuser !== "pierre" || choixuser !== "feuille" || a !== "ciseaux") {
alert("Entre une réponse, correct");
 }
document.getElementById("score").innerHTML= scoreuser +" " + "vs" + " "  + scoreordi ;
setTimeout(function () {
  // mettre les instruction
  document.getElementById("feuille").style.display = "block";
  document.getElementById("pierre").style.display = "block";
  document.getElementById("ciseaux").style.display = "block";
  document.getElementById("ordi").style.display = "none";
  document.getElementById("image").style.display = "none";


}, 2000);
if (scoreuser==3 || scoreordi==3) {

setTimeout(function() {
  scoregeneral();
  document.getElementById("feuille").style.display = "none";
  document.getElementById("pierre").style.display = "none";
  document.getElementById("ciseaux").style.display = "none";
  document.getElementById("ordi").style.display = "none";
  document.getElementById("image").style.display = "none";

}, 2000);
}



}
