import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Apiservices } from '../../apiservices';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
})
export class Product {

  products:any[] = [];
cards: any;
$item: any;
singleProduct: any;
  constructor(private apiservice:Apiservices) {}
  ngOnInit(){
    this.apiservice.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

}

