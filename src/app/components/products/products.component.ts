import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[];
  constructor(private customerService: CustomerService, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductsByRent();
  }

  getLogo(id: any): void {
    this.productService.getLogo(id).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  getProductsByRent(): void {

    this.customerService.getProductsByRent(sessionStorage.getItem('sessionId')).subscribe(response => {
      console.log(response);
      this.products = response;
    }, error => {
      console.log(error);
    })
  }

  addView(idp: any): void {

    const v = {

    }

    this.customerService.addView(v, sessionStorage.getItem('sessionId'), idp).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })

  }

}
