// Tehtävä 5.
// arvonta.ts
class Arvonta<T>{

  private alkio: T[]
  // useamman arvon saa sisään.
  constructor(...arvot: T[]) {
    this.alkio = arvot
  }

  arvo() {
    // poistetaan random ja palautetaan poistettu
    let arvottu = this.alkio.splice(Math.floor(Math.random() * this.alkio.length), 1)
    return arvottu.join()
  }
  jaljella() {
    // palautetaan loput pilkulla erotettuna
    return this.alkio.join(', ')
  }
}

export { Arvonta } 