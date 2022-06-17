"use strict";
const elaimet = [
    { laji: 'kissa', elinymparisto: 'maa' },
    { laji: 'koira', elinymparisto: 'maa' },
    { laji: 'kala', elinymparisto: 'vesi' },
    { laji: 'rapu', elinymparisto: 'vesi' },
    { laji: 'hylje', elinymparisto: 'vesi' },
];
// luodaan muuttuja ymparistot ja lisätään reduce joka rallattaa objektin läpi
const ymparistot = elaimet.reduce((acc, elain) => {
    // lisätään piste osumista elinympäristöstä oikeisiin kohtiin.
    if (elain.elinymparisto === 'maa') {
        acc.maa += 1;
    }
    else {
        acc.vesi += 1;
    }
    return acc;
}, {
    // reducen tulos tahdotaan objektiin joka näyttää tältä,
    // tyypitystä ei tarvitse kun ymmärtää arvoista
    maa: 0,
    vesi: 0
});
console.log(ymparistot);
//# sourceMappingURL=tentti.js.map