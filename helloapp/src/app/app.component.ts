import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { HttpService } from './http.service'
import { User } from './user'

interface Data {
  userList: User[]
}
@Component({
  selector: 'my-app',
  template: `<div *ngFor="let user of users">
    <h2>The name is: {{ user?.name }}</h2>
    <h2>The age is: {{ user?.age }}</h2>
  </div> `,
  providers: [HttpService],
})
export class AppComponent implements OnInit {
  users: User[] | undefined
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getData().subscribe({
      next: (data: Data) => (this.users = data.userList),
    })
  }
}
