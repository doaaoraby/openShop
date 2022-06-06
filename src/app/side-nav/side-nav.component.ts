import { Component, OnInit } from '@angular/core';
import {ShowProductsService} from '../services/show-products.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],providers:[ShowProductsService]
})
export class SideNavComponent implements OnInit {
 
  
  ShowComplex(){
    console.log("from show complex");
    this.prodServ.setComplex(true);
    this.prodServ.setSimple(false);
    console.log(this.prodServ.getComplex());
  }
  ShowSimple(){
    console.log("from show simple");
    this.prodServ.setComplex(false);
    this.prodServ.setSimple(true);
  }
  ShowAll(){
    console.log("from show all");
    this.prodServ.setComplex(true);
    this.prodServ.setSimple(true);
  }
  constructor(private prodServ:ShowProductsService) { }
  
  ngOnInit(): void {
  }

}
