export interface IGeneric {
  id: number;
  name: string;
}

export interface IMainGender extends IGeneric {
  subGenders: IGeneric;
}

export interface IBookGender {
id:number,
hasSubgender:boolean,
subGenderId?:number    
}

export interface IBook {
id:number,
number?:number,
title:string,
publisherId:number,
asterik?:boolean,
unnumbered?:boolean
gender:IBookGender
}
