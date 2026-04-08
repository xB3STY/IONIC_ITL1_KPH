import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OrdersService } from '../services/orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class OrdersPage implements OnInit {
  orders: any[] = [];

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    // load orders from backend when page opens
    this.ordersService.getOrders().subscribe((data: any) => {
      console.log('Orders:', data);
      // store orders so they can be shown in the page
      this.orders = data;
    });
  }
}
