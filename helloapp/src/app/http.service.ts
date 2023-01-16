import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
  constructor(private httpClient: HttpClient) {}
  getData() {
    return this.httpClient.get('assets/users.json')
  }
}
