// Tehtävä 5.
// arvonta.ts
class Arvonta {
    alkio;
    // useamman arvon saa sisään.
    constructor(...arvot) {
        this.alkio = arvot;
    }
    arvo() {
        // poistetaan random ja palautetaan poistettu
        let arvottu = this.alkio.splice(Math.floor(Math.random() * this.alkio.length), 1);
        return arvottu.join();
    }
    jaljella() {
        // palautetaan loput pilkulla erotettuna
        return this.alkio.join(', ');
    }
}
export { Arvonta };
//# sourceMappingURL=arvonta.js.map