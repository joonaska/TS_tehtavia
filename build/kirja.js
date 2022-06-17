"use strict";
// closure eli funktio, joka palauttaa funktion.
// Sulkeuma mahdollistaa funktiolle pääsyn sen ulkopuolisiin muuttujiin.
function laskeTippi(pros) {
    return function (y) {
        return pros / 100 * y;
    };
}
// luodaan muuttujat jotka onkin funktioita.
const tip20 = laskeTippi(20);
const tip30 = laskeTippi(30);
// tulostellaan 
console.log(`Lasku 100, tippi ${tip20(100)}`);
console.log(`Lasku 150, tippi ${tip20(150)}`);
console.log(`Lasku 100, tippi ${tip30(100)}`);
console.log(`Lasku 150, tippi ${tip30(150)}`);
//# sourceMappingURL=kirja.js.map