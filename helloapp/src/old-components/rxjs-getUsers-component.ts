import { Component, OnInit } from '@angular/core'
import { HttpService } from './http.service'
import { GetService } from './node-http.service'
import { User } from './user'

@Component({
  selector: 'my-app',
  template: `
    <div>{{ http.errorMessage }}</div>
    <div *ngFor="let user of users">
      <h2>The name is: {{ user?.name }}</h2>
      <h2>The age is: {{ user?.age }}</h2>
    </div>
  `,
  providers: [HttpService, GetService],
})
export class AppComponent implements OnInit {
  users: User[] = []
  constructor(public http: HttpService) {}

  ngOnInit() {
    this.http.getUsers().subscribe({
      next: (data: User[]) => (this.users = data),
    })
  }
}
