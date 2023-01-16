import { Component, OnInit } from '@angular/core'
import { GetService } from './node-http.service'
import { User } from './user'

@Component({
  selector: 'my-app',
  template: `<div class="form-group">
      <label>Имя</label>
      <input class="form-control" name="username" [(ngModel)]="user.name" />
    </div>
    <div class="form-group">
      <label>Возраст</label>
      <input
        class="form-control"
        type="number"
        name="age"
        [(ngModel)]="user.age"
      />
    </div>
    <div class="form-group">
      <button class="btn btn-default" (click)="submit(user)">Отправить</button>
    </div>
    <div *ngIf="done">
      <div>Получено от сервера:</div>
      <div>Имя: {{ recievedUser?.name }}</div>
      <div>Возраст: {{ recievedUser?.age }}</div>
    </div>`,
  providers: [GetService],
})
export class AppComponent {
  done = false
  user = new User('', 0)
  recievedUser: User | undefined
  constructor(private httpService: GetService) {}
  submit(user: User) {
    this.httpService.postUser(user).subscribe({
      next: (data: any) => {
        this.recievedUser = data
        this.done = true
      },
      error: (err) => {
        console.log(err.message)
      },
    })
  }
}
