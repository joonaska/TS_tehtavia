const konffi = new Map([
  ['hakemisto', '/home'],
  ['tiedosto', 'muistio.txt']
])
// luodaan funktiot 
const avattavaTiedosto = () => {
  // tarkistetaan löytyykö avain-arvo parit
  if (konffi.has('hakemisto' && 'tiedosto')) {
    return `${konffi.get('hakemisto')}/${konffi.get('tiedosto')}`
  } else {
    // asetetaan uusi arvo ja palautetaan päivitettynä
    konffi.set('tiedosto', 'uusi.txt')
    return `${konffi.get('hakemisto')}/${konffi.get('tiedosto')}`
  }
}

const asetaTiedosto = (nimi: string | null) => {
  // tarkistetaan onko mikä arvo löytyy
  if (nimi === null) {
    konffi.delete('tiedosto')
  }
  else {
    // asetetaan uusi arvo
    konffi.set('tiedosto', nimi)
  }
}
console.log(avattavaTiedosto())
asetaTiedosto('vanha.txt');
console.log(avattavaTiedosto());
asetaTiedosto(null);
console.log(avattavaTiedosto());