import { Injectable } from '@angular/core'
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { User } from './user'

@Injectable()
export class GetService {
  constructor(private httpClient: HttpClient) {}

  postUser(user: User) {
    const myHeaders = new HttpHeaders().set('auth', 'my_token')
    const body = { name: user.name, age: user.age }
    return this.httpClient.post('http://localhost:3000/postuser', user, {
      headers: myHeaders,
    })
  }
}
