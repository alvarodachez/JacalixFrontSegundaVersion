import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private http: HttpClient) {
  }

  createProduct(p: any) {
    const endpoint = 'http://localhost:8080/jacalix/products'
    return this.http.post(endpoint, p);
  }

  getGoldProducts() {
    const endpoint = 'http://localhost:8080/jacalix/products/gold'
    return this.http.get(endpoint);
  }
  getAdvancedProducts() {
    const endpoint = 'http://localhost:8080/jacalix/products/advanced'
    return this.http.get(endpoint);
  }
  getBasicProducts() {
    const endpoint = 'http://localhost:8080/jacalix/products/basic'
    return this.http.get(endpoint);
  }
  getLogo(id: any) {
    const endpoint = 'http://localhost:8080/jacalix/products/doc/download/' + id;
    return this.http.get(endpoint);
  }

  upload(file: File, id: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    const endpoint = ''
    formData.append('files', file);

    const req = new HttpRequest('POST', endpoint, file, {

      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
}

