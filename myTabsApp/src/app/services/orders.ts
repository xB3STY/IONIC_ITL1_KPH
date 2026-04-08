import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private API_URL = 'http://localhost:8101';

  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get(`${this.API_URL}/orders`);
  }
}
