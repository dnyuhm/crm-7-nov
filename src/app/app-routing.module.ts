import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListOrdersComponent } from './orders/pages/page-list-orders/page-list-orders.component';
import { PageTestComponent } from './orders/pages/page-test/page-test.component';

const routes: Routes = [
  { path: 'orders', component: PageListOrdersComponent },
  { path: 'test', component: PageTestComponent },
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
