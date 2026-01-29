import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apiservices } from '../../apiservices';

@Component({
  selector: 'app-single-view',
  imports: [],
  templateUrl: './single-view.html',
  styleUrl: './single-view.css',
})
export class SingleView {
  singleProduct:any;
  constructor(private router: ActivatedRoute,private apiservice: Apiservices) {}
  ngOnInit() {
    const productId = this.router.snapshot.paramMap.get('titleid');
    if (productId) {
      this.apiservice.getsingleProduct(productId).subscribe((data)=>{
        this.singleProduct = data;
        console.log(data);
        
      }
    );
  }
  }
}