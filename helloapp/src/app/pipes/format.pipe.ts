import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'format',
})
export class FormatPipe implements PipeTransform {
  transform(value: number, ...args: any[]): any {
    return value.toString().replace('.', ',')
  }
}
