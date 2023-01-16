import { Injectable } from '@angular/core'

@Injectable()
export class LogService {
  write(message: string) {
    console.log(message)
  }
}
