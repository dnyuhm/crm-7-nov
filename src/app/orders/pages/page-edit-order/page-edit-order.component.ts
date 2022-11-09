import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.css'],
})
export class PageEditOrderComponent implements OnInit {
  private id: number;
  public order$: Observable<Order>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.order$ = this.ordersService.getById(this.id);
  }

  ngOnInit(): void {}

  public action(item: Order) {
    this.ordersService.update(item).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
