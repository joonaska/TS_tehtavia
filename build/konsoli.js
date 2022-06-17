"use strict";
const maxNro = 40;
const arvottavienLkm = 7;
const numerot = new Set();
for (let i = 1; i <= maxNro; i++) {
    numerot.add(i);
}
function arvoNumero(n) {
    const kaytettavatNumerot = Array.from(n);
    return kaytettavatNumerot[Math.floor(Math.random() * kaytettavatNumerot.length)];
}
let tulos = [];
let lisanumerot = [];
for (let i = 1; i <= arvottavienLkm; i++) {
    const arvottu = arvoNumero(numerot);
    tulos.push(arvottu);
    tulos.sort((a, b) => a - b);
    numerot.delete(arvottu);
}
// extrana lisänumerot
for (let i = 1; i <= 3; i++) {
    const arvottu = arvoNumero(numerot);
    lisanumerot.push(arvottu);
    lisanumerot.sort((a, b) => a - b);
    numerot.delete(arvottu);
}
console.log(`Ja illan lottonumerot on: ${tulos}`);
console.log(`sekä lisänumerot: ${lisanumerot}`);
//# sourceMappingURL=konsoli.js.map