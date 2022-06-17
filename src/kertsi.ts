// luokkana
class HP {
  constructor(private health: number) {
    this.health = health
  }
  get() {
    return this.health;
  }
  hit(x: number) {
    return this.health -= x
  }
  revive(y: number) {
    return this.health += y
  }
}

const player1HP = new HP(100)
const player2HP = new HP(100)

// const HP = (healthStart: number) => {

//   let health = healthStart
//   // palauttaa objektin, jossa kolme metodia.
//   return {
//     // hetkinen hp
//     get() {
//       return health;
//     },
//     // iskuja potkuja hittiä damageee
//     hit(x: number) {
//       health -= x
//       return health


//     },
//     // hp lisää / parannus
//     revive(y: number) {
//       return health += y
//     }
//   }
// }

// const player1HP = HP(100)
// const player2HP = HP(100)
console.log(`Pelaaja 1 hp : ${player1HP.get()}`)
console.log(`Pelaaja 2 hp : ${player2HP.get()}`)
player2HP.hit(20)
console.log(`Pelaaja 2 ottaa hittiä parikymmentä ja hp sen jälkeen ${player2HP.get()}`)
player1HP.revive(20)
console.log(`Pelaaja 1 syö taikasienen ja saa lisähp eli  nyt hp ${player1HP.get()}`)