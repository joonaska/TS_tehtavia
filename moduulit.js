// tässä käytetään PII-vakiota Math.PI:n sijaan vain
// demoamaan, että PII-vakio on moduulin sisäinen
// muuttuja, eikä sitä voi käyttää moduulin ulkopuolelta
const PII = 3.14;

const ympyranKeha = (halkaisija) => {
  if (typeof halkaisija !== 'number' || isNaN(halkaisija)) {
    throw Error('Halkaisijan tulee olla numero!');
  }
  return PII * halkaisija;
};

//module.exports = ympyranKeha;
//tai
// exports = ympyranKeha;
// tai
module.exports = {
  ympyranKeha: ympyranKeha,
};
