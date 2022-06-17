"use strict";
const taulukko = [12, 12, 43, 22];
// const taulukko2: string[] = ['asd', 'asdsddd']
// taulukko.push(300)
const taulukko2 = [31, 22, 12];
//promise
const promise = new Promise((resolve) => {
    setTimeout(() => resolve(42), 2000);
});
promise.then((arvo) => console.log(arvo * 2));
// geneerinen funktio T yleinen tyyppimuuttuja, joka tsekkaa taulukon tyypin 
function tulostaTaulukko(taulukko) {
    taulukko.forEach((alkio) => {
        console.log(alkio);
    });
}
//# sourceMappingURL=geneerinen.js.map