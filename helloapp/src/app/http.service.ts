import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, map } from 'rxjs'
import { User } from './user'

@Injectable()
export class HttpService {
  errorMessage = ''
  constructor(private httpClient: HttpClient) {}
  getUsers() {
    return this.httpClient.get('../assets/users.json')
  }
}
