import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';   
import {ProductsComponent} from './products/products.component';
import {MaterialModule} from './material/material.module'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {environment} from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SideNavComponent} from './side-nav/side-nav.component';
import { DividerComponent } from './divider/divider.component'
import { FormsModule } from '@angular/forms';
import {CashingService} from './services/cashing.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SideNavComponent,
    DividerComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,FormsModule, HttpClientModule,
    MaterialModule
  
  ],
  providers: [CashingService],
  bootstrap: [AppComponent]
})

export class AppModule { }
