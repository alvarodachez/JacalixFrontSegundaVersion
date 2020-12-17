import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  addGold(){
    const sub ={

      rentType:'GOLD',
      price:20
    }

    if(sessionStorage.getItem('sessionId') != '1'){

      this.customerService.addSubscription(sub,sessionStorage.getItem('sessionId')).subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      })
    }else{
      alert('Admins can not change their subscriptions')
    }
  }

  addAdvanced(){
    const sub ={

      rentType:'ADVANCED',
      price:15
    }

    if(sessionStorage.getItem('sessionId') != '1'){

      this.customerService.addSubscription(sub,sessionStorage.getItem('sessionId')).subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      })
    }else{
      alert('Admins can not change their subscriptions')
    }
  }

  addBasic(){
    const sub ={

      rentType:'BASIC',
      price:10
    }

    if(sessionStorage.getItem('sessionId') != '1'){

      this.customerService.addSubscription(sub,sessionStorage.getItem('sessionId')).subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      })
    }else{
      alert('Admins can not change their subscriptions')
    }
  }

}
