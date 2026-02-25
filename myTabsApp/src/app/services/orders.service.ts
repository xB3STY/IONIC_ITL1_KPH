import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Order {
  id: number;
  title: string;
  status: string;
  price: number;
}

@Injectable({ providedIn: 'root' })
export class OrdersService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // GET /orders from Express API
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/orders`);
  }
}
