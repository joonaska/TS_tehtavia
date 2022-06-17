"use strict";
class Laatikko {
    sisalto;
    constructor(arvo) {
        if (arvo) {
            this.sisalto = arvo;
        }
        else {
            this.sisalto = null;
        }
    }
    // tehdään metodit, laita korvaa olemassa olevan arvon x:llä, toinen tulostaa mitä laatikossa on ja asettaa null,
    // viimeinen näyttää kurkkaa laatikkoon.
    laita(x) {
        this.sisalto = x;
    }
    ota() {
        console.log(this.sisalto);
        this.sisalto = null;
    }
    katoSisalto() {
        console.log(this.sisalto);
    }
}
// tehdään laatikko
const boksi = new Laatikko();
// laitetaan laatikkoon tavaraa, se voi olla tyypiltään mikä vaan.
boksi.laita('karhu');
boksi.laita(10);
boksi.ota();
boksi.katoSisalto();
//# sourceMappingURL=tunti1.js.map