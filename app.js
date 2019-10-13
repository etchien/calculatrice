
function touche(x)
{
    let va = x.value;
    let ecran = document.getElementById("affichage");
    ecran.value += va;
}

 function resultat() {
  let  ecran = document.getElementById("affichage");
    ecran.value = eval(ecran.value);

}

 function effacer(){
  let ecran = document.getElementById("affichage");
    ecran.value = "";
}


 function fermer() {
    window.close();
}

 function racine(){
    ecran = document.getElementById("affichage");
    let resultat = Math.sqrt(ecran.value);
    ecran.value = resultat;
}

function decimal(x) {
  let  ecran = document.getElementById("affichage");
    ecran.value += x;
}

function effacer1() {
    ecran = document.getElementById("affichage");
    ecran.value = 0;

}

function supprime() {
    let ecran = document.getElementById("affichage").value;
    document.getElementById("affichage").value = ecran.substring(0, ecran.length - 1);

}

function puissance(){
  let  ecran = document.getElementById("affichage");
  ecran.value = ecran.value * ecran.value;
}

function pourcentage() {
    let pourcentageOui = (nbOui / (nbNon + nbOui)) * 100;
    let pourcentageNon = 100 - pourcentageOui
     ecran = document.getElementById("affichage");
}

function log() {
    ecran = document.getElementById("affichage");
    let resultat = Math.log(ecran.value);
    ecran.value = resultat;
}

function expo(){
    ecran = document.getElementById("affichage");
    let resultat = Math.exp(ecran.value);
    ecran.value = resultat;
}

function py() {
   let ecran = document.getElementById("affichage");
    let resultat = Math.PI += " ";
    ecran.value += resultat;
}

function inverse(){
    let ecran = document.getElementById("affichage");
    ecran.value = 1 / (ecran.value);
}

function sign(x)
{
}

function ln() {
  let ecran = document.getElementById("affichage");
  ecran.value = Math.log(ecran.value);
}

function cos() {
  let ecran = document.getElementById("affichage");
  ecran.value = Math.cos(ecran.value/180 * Math.PI);
}

function sin() {
 let ecran = document.getElementById("affichage");
  ecran.value = Math.sin(ecran.value/180 * Math.PI);
}

function tan() {
  let ecran = document.getElementById("affichage");
   ecran.value = Math.tan(ecran.value/180 * Math.PI);
}

function log(){
  let ecran = document.getElementById("affichage");
  ecran.value = Math.log(ecran.value)/Math.LN10;
}

function acos() {
  let ecran = document.getElementById("affichage");
  ecran.value = Math.acos(ecran.value)*180/Math.PI;
}

function asin() {
  let ecran = document.getElementById("affichage");
  ecran.value = Math.asin(value)*180/Math.PI;
}

function atan() {
  let ecran = document.getElementById("affichage");
  ecran.value = Math.atan(value)*180/Math.PI;
}
