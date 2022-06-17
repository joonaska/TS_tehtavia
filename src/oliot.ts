interface IPerusFaktat{
  laji:string;
  svuosi:number;
}
interface ILiikkuva{
  liikkumisaani:string;
  liiku:(a?:number)=>void;
}

interface IAanteleva extends IPerusFaktat{
  aani:string;
  aantele:()=>string;
}

type LiikkuuJaAantelee = ILiikkuva & IAanteleva

class Koira implements LiikkuuJaAantelee{
  public laji: string;
  public rotu:string;
  public nimi:string
  public svuosi: number;
  public aani:string
  public liikkumisaani: string;
  
  
  constructor(laji:string,rotu:string,nimi:string,svuosi:number,liikkumisaani:string,aani:string){
    this.laji = laji
    this.rotu = rotu
    this.nimi = nimi
    this.svuosi = svuosi
    this.aani = aani
    this.liikkumisaani = liikkumisaani
    
  }
  kuolaa(){
    console.log('Sluurrpp dip dip dip')
  }
  liiku(x:number = 1){
    
    for (let i = 0; i < x; i++) {
      console.log(this.liikkumisaani);
  }
}
 aantele(){
  return this.aani
  }
}

class Kilpikonna implements IPerusFaktat,ILiikkuva{
  
    constructor(public laji:string,  public svuosi:number, public vari:string,public liikkumisaani:string){
      
     
    }
    liiku(){
      console.log(this.liikkumisaani)
    }

  }
  const musti = new Koira('koira','bernie paimenkoira','Musti',2012,'skrips skraps','äyhöyh wuh wuh' )
  musti.kuolaa()
  const turtle = new Kilpikonna('Turtle', 1990, 'vihreä','önts önts önts')

musti.aantele()
musti.liiku()
