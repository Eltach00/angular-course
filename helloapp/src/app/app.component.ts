import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HttpService } from './http.service'
import { Observable } from 'rxjs'

class Item {
  constructor(
    public id: number,
    public price: number,
    public product: string
  ) {}
}

@Component({
  selector: 'my-app',
  template: `<div style="margin: 3rem">
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
      <h1>{{ arr | join : 1 : 3 }}</h1>
      <br />
      <input [(ngModel)]="num" name="fact" />
      <div>Результат: {{ num | format }}</div>
      <br />
      <input #user type="text" name="user" />
      <button (click)="arr.push(user.value)">Add to array</button>
      <h2>{{ arr | join }}</h2>
      <br />
      <button (click)="goToItem(item)" class="btn">Перейти</button>
      <br />
      <li *ngFor="let item of users | async">
        <p>Name: {{ item.name }}</p>
        <p>Age: {{ item.age }}</p>
      </li>
      <br />
    </div>
    <router-outlet></router-outlet>
  </div>`,
  providers: [HttpService],
})
export class AppComponent implements OnInit {
  num: number
  x = 0.24
  arr = ['el', 'ka']

  item = new Item(1, 0, '')
  users: Observable<Object>

  constructor(private router: Router, private httpService: HttpService) {}
  ngOnInit(): void {
    this.users = this.httpService.getUsers()
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
