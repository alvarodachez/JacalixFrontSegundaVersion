import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  username: string;
  password: string;

  usernameSign: string;
  passwordSign: string;
  name: string;
  surname: string;
  age: string;
  dni: string;
  constructor(private customerService: CustomerService, private route: Router) { }

  ngOnInit(): void {
  }

  createCustomer(): void {
    const customer = {
      username: this.usernameSign,
      password: this.passwordSign,
      name: this.name,
      surname: this.surname,
      age: this.age,
      dni: this.dni
    }

    this.customerService.createCustomer(customer).subscribe(response => {
      console.log(response);
      sessionStorage.setItem('sessionId', response.id)
      if (sessionStorage.getItem('sessionId') == '1') {
        this.route.navigate(['managment'])
      } else {
        
        this.route.navigate(['home']);
      }

    },
      error => {
        console.log(error);
      })

  }

  getCustomer(): void{
    this.customerService.getCustomerByUsername(this.username).subscribe(response => {

      console.log(response);
      if(response.password == this.password){
        sessionStorage.setItem('sessionId', response.id)
        if(sessionStorage.getItem('sessionId') == '1'){
          this.route.navigate(['managment'])
        }else{
          this.route.navigate(['home']);
        }
      }else{
        alert('Usuario Incorrecto. Intentelo de nuevo');
      }
    }, error => {
      console.log(error);
    })
  }

}
