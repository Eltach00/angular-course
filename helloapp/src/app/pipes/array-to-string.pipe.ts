import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'join',
  pure: false,
})
export class JoinPipe implements PipeTransform {
  transform(array: any[], start?: any, end?: any): any {
    let result = array
    if (start !== undefined) {
      if (end !== undefined) {
        result = array.slice(start, end)
      }
      result = array.slice(start, array.length)
    }
    return result.join(', ')
  }
}
