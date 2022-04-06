// Chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 

let kmDaPerc = prompt('Quanti chilometri vuoi percorrere?');

let etaPass = prompt('Quanti anni ha il passeggero?');

console.log("kilometri: " + kmDaPerc + " età: " + etaPass);

let prezzoNonSc = 0.21 * kmDaPerc;

console.log(prezzoNonSc);

let prezzo;

if(etaPass < 18){
  prezzo = prezzoNonSc - (prezzoNonSc / 100 * 20)
}else if( etaPass >= 65){
  prezzo = prezzoNonSc - (prezzoNonSc / 100 * 40)
}else{
  prezzo = prezzoNonSc
};

console.log(prezzo);

let prezzoDefinitivo= prezzo.toFixed(2)

document.getElementById("età_pass").innerHTML = "La tua età: " + etaPass;

document.getElementById("km_perc").innerHTML = "Kilometri che vuoi percorrere: " + kmDaPerc;

document.getElementById("prezzo_biglietto").innerHTML = "Il tuo biglietto: " + prezzoDefinitivo + "€";


