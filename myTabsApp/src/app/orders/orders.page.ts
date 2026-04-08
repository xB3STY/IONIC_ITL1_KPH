import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OrdersService, Order } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orders: Order[] = [];

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    // Load orders on page init
    this.ordersService.getOrders().subscribe(data => (this.orders = data));
  }
}
