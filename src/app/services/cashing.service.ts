import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const CACHE_KEY='casheKey';

@Injectable({
  providedIn: 'root'
})
export class CashingService {
  
  constructor(http:HttpClient) { 
    var repos;
  repos=http.get<any>('/').subscribe(next=>{
    localStorage[CACHE_KEY]=JSON.stringify(next);
  });

     
// this.repos
// this.repos=this.repos.pipe(
//   startwith JSON.parse(localStorage[CACHE_KEY]||_'[]'));
  }
}

