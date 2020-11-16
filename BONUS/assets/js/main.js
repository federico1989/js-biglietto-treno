// Il numero di chilometri che vuole
var chilometri;
chilometri = Number(prompt("Quanti chilometri vuoi percorrere?"));
// Età del passeggero
console.log(chilometri);
var età;
età  = Number(prompt("Quanti anni hai?"));
// Prezzo del viaggio
var prezzoAlKm;
prezzoAlKm = 0.21;
// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzo;
prezzo = (chilometri * prezzoAlKm);
// Prezzo totale
var prezzoTotale;
// Applicazione dello sconto del 20% per i minorenni e del 40% per gli over 65
if (età < 18) {
  prezzoTotale = prezzo - (prezzo * 0.2);
} else if (età > 65) {
  prezzoTotale = prezzo - (prezzo * 0.4);
} else {
  prezzoTotale = prezzo;
}
// Risultato a schermo
alert("Il prezzo del tuo biglietto è " + prezzoTotale.toFixed(2) + " €");
//Prova con immagine e scritte
document.getElementById('ticket').innerHTML = prezzoTotale.toFixed(2) + " €";
