"use strict";
// singleton luo vain yhden olion, hyvä esim tietokanta kutsussa.
class DBCon {
    name;
    addr;
    port;
    static instance;
    constructor(name, addr, port) {
        this.name = name;
        this.addr = addr;
        this.port = port;
    }
    static getInstance(name, addr, port) {
        if (!DBCon.instance) {
            DBCon.instance = new DBCon(name, addr, port);
        }
        return DBCon.instance;
    }
}
const db = DBCon.getInstance('db', 'http://localhost', 3000);
console.log(db);
//# sourceMappingURL=dbcon.js.map