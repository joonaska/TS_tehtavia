"use strict";
class Koira {
    laji;
    rotu;
    nimi;
    svuosi;
    aani;
    liikkumisaani;
    constructor(laji, rotu, nimi, svuosi, liikkumisaani, aani) {
        this.laji = laji;
        this.rotu = rotu;
        this.nimi = nimi;
        this.svuosi = svuosi;
        this.aani = aani;
        this.liikkumisaani = liikkumisaani;
    }
    kuolaa() {
        console.log('Sluurrpp dip dip dip');
    }
    liiku(x = 1) {
        for (let i = 0; i < x; i++) {
            console.log(this.liikkumisaani);
        }
    }
    aantele() {
        return this.aani;
    }
}
class Kilpikonna {
    laji;
    svuosi;
    vari;
    liikkumisaani;
    constructor(laji, svuosi, vari, liikkumisaani) {
        this.laji = laji;
        this.svuosi = svuosi;
        this.vari = vari;
        this.liikkumisaani = liikkumisaani;
    }
    liiku() {
        console.log(this.liikkumisaani);
    }
}
const musti = new Koira('koira', 'bernie paimenkoira', 'Musti', 2012, 'skrips skraps', 'äyhöyh wuh wuh');
musti.kuolaa();
const turtle = new Kilpikonna('Turtle', 1990, 'vihreä', 'önts önts önts');
musti.aantele();
musti.liiku();
//# sourceMappingURL=oliot.js.map