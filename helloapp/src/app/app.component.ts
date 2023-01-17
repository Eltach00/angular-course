import { Component } from '@angular/core'
import { Router } from '@angular/router'

class Item {
  constructor(
    public id: number,
    public price: number,
    public product: string
  ) {}
}

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `<div>
    <h1>Маршрутизация в Angular 15</h1>
    <nav class="navigation">
      <ul class="nav">
        <li
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <a routerLink="">Главная</a>
        </li>
        <li routerLinkActive="active">
          <a routerLink="/about">О сайте</a>
        </li>
        <li routerLinkActive="active">
          <a routerLink="/item/5/details">Details</a>
        </li>
        <li routerLinkActive="active">
          <a routerLink="/item/5/stat">Stats</a>
        </li>
      </ul>
    </nav>
    <div class="form-group">
      <h3>Параметры объекта</h3>
      <input
        type="number"
        [(ngModel)]="item.id"
        class="form-control"
        placeholder="Номер модели"
      /><br />
      <input
        type="number"
        [(ngModel)]="item.price"
        class="form-control"
        placeholder="Цена"
      /><br />
      <input
        [(ngModel)]="item.product"
        class="form-control"
        placeholder="Товар"
      /><br />
      <h1>{{ x | format }}</h1>
      <br />
      <button (click)="goToItem(item)" class="btn">Перейти</button>
    </div>
    <router-outlet></router-outlet>
  </div>`,
})
export class AppComponent {
  x = 0.24

  item = new Item(1, 0, '')

  private router: Router
  constructor(router: Router) {
    this.router = router
  }

  goToItem(myItem: Item) {
    this.router.navigate(['/item', myItem.id], {
      queryParams: {
        product: myItem.product,
        price: myItem.price,
      },
    })
  }
}
