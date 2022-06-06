import { Component } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { Observable, Observer } from 'rxjs';
import {Product} from './models/product'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp } from "firebase/app";
import {environment} from './../environments/environment';

AngularFireModule.initializeApp(environment.config);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // products:Product[]=[];
 
   constructor( ) {//cash:CashingService
    
  
    }
  }