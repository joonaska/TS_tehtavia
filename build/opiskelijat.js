"use strict";
const opiskelijat = [
    {
        opnro: 'a1234',
        tiedot: {
            nimi: 'Pekka Pekkanen',
            kaupunki: 'Jyväskylä',
        },
    },
    {
        opnro: 'b2345',
        tiedot: {
            nimi: 'Anneli Auvinen',
            kaupunki: 'Muurame',
        },
    },
    {
        opnro: 'c3456',
        tiedot: {
            nimi: 'Rainer Ruuskanen',
        },
    },
    {
        opnro: 'd4567',
    },
];
let nimet = opiskelijat.map(x => {
    // jos vasen operandi on null tai undefined palautetaan 'ei tiedossa'
    return x.tiedot?.nimi ?? 'Ei tiedossa';
});
console.log(nimet);
let kaupungit = opiskelijat.map(x => {
    // jos vasen operandi on null tai undefined palautetaan 'ei tiedossa'
    return x.tiedot?.kaupunki ?? 'Ei tiedossa';
});
console.log(kaupungit);
//# sourceMappingURL=opiskelijat.js.map