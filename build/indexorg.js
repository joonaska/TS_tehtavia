"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const haeData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(url);
    if (!res.ok) {
        throw new Error();
    }
    return yield res.json();
});
haeData('https://liukastumisvaroitus-api.beze.io/api/v1/warnings/')
    .then((a) => {
    a.forEach((b) => {
        console.log(b.created_at + ': ' + b.city);
    });
    // otetaan kiinni errori
}).catch((err) => console.log(err.message));
haeData('https://liukastumisvaroitus-api.beze.io/api/v1/warnings/1')
    .then((a) => {
    console.log('Varoitus kaupunkiin ' + a.city + ' id:' + a.id);
})
    // otetaan kiinni errori
    .catch((err) => console.log(err.message));
//# sourceMappingURL=indexorg.js.map