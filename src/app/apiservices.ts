import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservices {
  constructor(private http:HttpClient) {} 
  getProducts(){
    return this.http.get('https://fakestoreapi.com/products');
  }
  getsingleProduct(id:string){
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
  
}
