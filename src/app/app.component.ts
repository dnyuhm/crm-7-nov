import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string;
  public close: boolean;
  private obs: Observable<number>;

  constructor() {
    this.title = 'crm';
    this.close = false;
    this.obs = new Observable<number>((listX) => {
      listX.next(Math.random());
    });

    // this.obs.subscribe((data) => console.log(data));
    // this.obs.subscribe((data) => console.log(data));
  }

  public toggle(): void {
    this.close = !this.close;
  }
}
