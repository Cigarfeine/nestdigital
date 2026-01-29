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
   // {name: 'HARRY', Image: 'https://i.pinimg.com/736x/9c/d6/91/9cd6914fcbe9fbda60d0c83d7dec44f0.jpg'},
    //{name: 'JEFF', Image: 'https://i.pinimg.com/736x/36/19/d6/3619d62b6082e153293ecf4961745a4e.jpg'}
 // ]
}


