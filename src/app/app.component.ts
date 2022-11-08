import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  public title: string;
  public close: boolean;
  private obs: Observable<number>;
  private sub: Subscription;

  constructor() {
    this.title = 'crm';
    this.close = false;
    this.obs = new Observable<number>((listX) => {
      listX.next(Math.random());
    });

    this.sub = this.obs.subscribe((data) => console.log(data));
    // this.obs.subscribe((data) => console.log(data));
  }

  public toggle(): void {
    this.close = !this.close;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
