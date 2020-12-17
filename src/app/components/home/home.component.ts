import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customer: any;
  goldProducts: any;
  advancedProducts: any;
  basicProducts: any;

  constructor(private productService: ProductService, private customerService: CustomerService) { }

  ngOnInit(): void {

    this.getCustomerById();
    this.getGoldProducts();
    this.getAdvancedProducts();
    this.getBasicProducts();
  }

  getCustomerById() {
    this.customerService.getCustomerById(sessionStorage.getItem('sessionId')).subscribe(response => {
      console.log(response);
      this.customer = response;
    }, error => {
      console.log(error);
    })
  }
  getGoldProducts() {

    this.productService.getGoldProducts().subscribe(response => {
      console.log(response);
      this.goldProducts = response;
    }, error => {
      console.log(error);
    })
  }

  getAdvancedProducts() {

    this.productService.getAdvancedProducts().subscribe(response => {
      console.log(response);
      this.advancedProducts = response;
    }, error => {
      console.log(error);
    })
  }

  getBasicProducts() {

    this.productService.getBasicProducts().subscribe(response => {
      console.log(response);
      this.basicProducts = response;
    }, error => {
      console.log(error);
    })
  }

}
