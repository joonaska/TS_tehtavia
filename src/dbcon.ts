// singleton luo vain yhden olion, hyvä esim tietokanta kutsussa.

class DBCon {
  private static instance: DBCon;

  private constructor(public name:string, public addr:string, public port:number) {}

  static getInstance(name:string,addr:string,port:number) {
    if (!DBCon.instance) {
      DBCon.instance = new DBCon(name,addr,port);
    }
    return DBCon.instance;
  }
}
const db = DBCon.getInstance('db','http://localhost',3000)
console.log(db)