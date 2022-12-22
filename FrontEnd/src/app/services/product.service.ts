import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API = "http://localhost:8899/api"
  constructor(private http: HttpClient) { }
  getAllProduct(): Observable<any> {
    return this.http.get(`${this.API}/product/get`);
  }
  getProductById(id: any): Observable<any> {
    return this.http.get(`${this.API}/product/getproductbyid/${id}`);
  }
  postData(data: any): Observable<any> {
    return this.http.post(`${this.API}/product/add`, data);
  }
  updateData(data: any, id: any): Observable<any> {
    return this.http.put(`${this.API}/product/update/${id}`, data);
  }
  deleteData(id: any): Observable<any> {
    return this.http.delete(`${this.API}/product/delete/${id}`);
  }
}
