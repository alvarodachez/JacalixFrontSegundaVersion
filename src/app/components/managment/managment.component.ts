import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.css']
})
export class ManagmentComponent implements OnInit {

  isAdmin: boolean;
  productName: string;
  productDescription: string;
  rentProduct: string;
  categoryProduct: string;
  customer: any;


  constructor(private customerService: CustomerService, private productService: ProductService) {

    
  }

  ngOnInit(): void {

    this.getAdmin();
  }

  
  getCustomerById() {
    this.customerService.getCustomerById(sessionStorage.getItem('sessionId')).subscribe(response => {

      console.log(response);
      this.customer = response;
    }, error => {
      console.log(error);
    })
  }

  createProduct(): void {
    const product = {
      name: this.productName,
      description: this.productDescription,
      rent: this.rentProduct,
      cat: this.categoryProduct
    }

    this.productService.createProduct(product).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
  getAdmin() {
    this.isAdmin = false;
    if (sessionStorage.getItem('sessionId') == '1') {

      this.isAdmin = true;
      this.getCustomerById();
    }
  }

}
