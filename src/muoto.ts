// tyypitetään niin että argumentit voivat olla vain objekteja
function yhdistaObjektit<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b)
}

const eka = {
  etunimi: 'Raipe',
  sukunimi: 'Helminen',
  postinumero: 40520
}
const toka = {

  oppilaitos: 'Jamk',
  kaupunki: 'Jyväskylä',
  opnumero: 832
}

const yhdistelma = yhdistaObjektit(eka, toka)
console.log(yhdistelma)
// paluutyyppi on T & U eli molemmista objekteista sisällöt