import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowProductsService {
  public simple:boolean=true;
  public complex:boolean=true;

  constructor() { }

  getComplex(){
    return this.complex;
  }
  getSimple(){
    return this.simple;
  }
  setComplex(val:boolean){
    this.complex=val;
  }
  setSimple(val:boolean){
    this.simple=val;
  }
  
}
