import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, map } from 'rxjs'
import { User } from './user'

@Injectable()
export class HttpService {
  errorMessage = ''
  constructor(private httpClient: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this.httpClient.get('assets/usersP.json').pipe(
      map((data: any) =>
        data.userList.map(
          (user: any): User => new User(user.userName, user.userAge)
        )
      ),
      catchError((err) => {
        console.log(err)
        this.errorMessage = err.message
        return []
      })
    )
  }
}
