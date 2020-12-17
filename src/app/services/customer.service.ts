import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  createCustomer(c: any): Observable<any> {
    const endpoint = 'http://localhost:8080/jacalix/customers';
    return this.http.post(endpoint, c);
  }

  addView(v: any, idc: any, idp: any): Observable<any> {

    const endpoint = 'http://localhost:8080/jacalix/customers/view/' + idc + '&&' + idp;
    return this.http.put(endpoint, v);
  }
  getProductsByRent(id: any): Observable<any> {
    const endpoint = 'http://localhost:8080/jacalix/customers/products/' + id;
    return this.http.get(endpoint);
  }
  addSubscription(s: any, id: any): Observable<any> {

    const endpoint = 'http://localhost:8080/jacalix/customers/subs/' + id;
    return this.http.put(endpoint, s);
  }
  updateCustomer(c: any, id: any): Observable<any> {

    const endpoint = 'http://localhost:8080/jacalix/customers/' + id;
    return this.http.put(endpoint, c);
  }

  getCustomerById(id: any): Observable<any> {
    const endpoint = 'http://localhost:8080/jacalix/customers/id/' + id;
    return this.http.get(endpoint);
  }
  getCustomerByUsername(username: any): Observable<any> {
    const endpoint = 'http://localhost:8080/jacalix/customers/username/' + username;
    return this.http.get(endpoint);
  }
}
