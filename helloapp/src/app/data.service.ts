import { Injectable, Optional } from '@angular/core'
import { LogService } from './log.service'

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(@Optional() private logService: LogService) {}
  private data: string[] = ['Apple iPhone XR', 'Samsung Galaxy S9', 'Nokia 9']

  getData(): string[] {
    if (this.logService) this.logService.write('Data has been loaded')
    return this.data
  }
  addData(name: string) {
    this.data.push(name)
    if (this.logService) this.logService.write('Data has been added')
  }
}
