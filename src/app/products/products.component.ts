import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {Product} from '../models/product';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { Observable, Observer } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {ShowProductsService} from '../services/show-products.service';
import { CommonModule } from '@angular/common';   
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
const CACHE_KEY='casheKey';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ShowProductsService]
})
export class ProductsComponent implements OnInit {
  
  products:Product[]=[];
  
  //simple:boolean=true;
  //complex:boolean=true;
  
  getSimple(){
   return this.prodServ.getSimple();
  }
  getComplex(){
    return this.prodServ.getComplex();
  }
  
  
 constructor( db: AngularFireDatabase,private storage: AngularFireStorage,private prodServ:ShowProductsService,http:HttpClient) {
    var request;
    request=db.list<Product>('/').valueChanges().subscribe(
      event =>{this.products = event;
      event.forEach(function (value) {
        console.log(value.id);
        var storageRef = storage.ref("/"+value.name+".jpg");
        storageRef.getDownloadURL().subscribe(downloadURL => {
          value.imageUrl=downloadURL;
        });
        
    });
    });
    request=http.get<any>('/').subscribe(next=>{
      console.log(next);
      console.log("hhh");
      localStorage[CACHE_KEY]=JSON.stringify(next);})
          
  }
  ngOnInit(): void {
  }

}
