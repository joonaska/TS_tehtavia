// importataan kaikki lodashista
import _ from 'lodash'
// kirjoitellaan pikku funktio
function ekaKirjainIsolla(teksti: string) {
  // käännetään ensin lodashin avulla parametri pieniin kirjaimiin
  teksti = _.toLower(teksti)
  // tulostellaan teksi jolloin joka sana alkaa isolla kirjaimella
  console.log(_.startCase(teksti))
}

const teksti =
  'Just sit right back hear the tale, \
Brendan’s gonna make, we cannot fail. \
We ain’t got three hours, it’ll take ten days. \
Born from scheme and self in a lispy haze.';
// tulostus
ekaKirjainIsolla(teksti)