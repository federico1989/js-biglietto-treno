// Il numero di chilometri che vuole
var chilometri;
chilometri = Number(prompt("Quanti chilometri vuoi percorrere?"));
// Età del passeggero
var età;
età  = Number(prompt("Quanti anni hai?"));
// Prezzo del viaggio
var prezzoBase;
prezzo = 0.21;
// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzoTotale;
prezzoTotale = chilometri * prezzoBase
// Applicazione dello sconto del 20% per i minorenni e del 40% per gli over 65
