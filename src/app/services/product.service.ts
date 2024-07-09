import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = "http://localhost:8080"
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public addProuct(formData:any):Observable<any>{
    return this.http.post(BASE_URL + "/user/addProduct", formData);
  }
  public getAllProducts():Observable<any>{
    return this.http.get(BASE_URL + "/user/getProduct");
  }
}
