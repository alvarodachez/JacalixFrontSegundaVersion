import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name:string;
  surname:string;
  age:string;
  dni:string;
  customer:any;
  idToUpdate:any;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomerById();
  }

  updateCustomer(){
    const customer ={
      name:this.name,
      surname:this.surname,
      age:this.age,
      dni:this.dni
    }

    this.customerService.updateCustomer(customer,this.idToUpdate).subscribe(response =>{

      console.log(response);
      this.getCustomerById();
    },error => {
      console.log(error);
    })
  }

  setIdToUpdate(id){

    this.idToUpdate = id;
  }
  getCustomerById(){
    this.customerService.getCustomerById(sessionStorage.getItem("sessionId")).subscribe(response => {
      console.log(response);
      this.customer = response;
    }, error =>{
      console.log(error);
    })
  }
}
