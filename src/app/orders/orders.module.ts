import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageTestComponent } from './pages/page-test/page-test.component';

@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrderComponent,
    PageEditOrderComponent,
    PageTestComponent
  ],
  imports: [CommonModule, OrdersRoutingModule],
})
export class OrdersModule {}
