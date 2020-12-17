import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'JacalixFrontSegundaVersion';

  isAdmin: boolean;

  constructor(private route: Router){}

  ngOnInit(){

    if(sessionStorage.getItem('sessionId') == '1'){
      this.isAdmin = true;
    }else{
      this.isAdmin = false;
    }
  }

  logOut(){
    sessionStorage.removeItem('sessionId');

    this.route.navigate([''])
  }

}
