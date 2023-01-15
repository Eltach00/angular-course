import { Component } from '@angular/core'

@Component({
  selector: 'data-comp',
  template: ` <h3>Hello, {{ name }}</h3> `,
})
export class DataComponent {
  name = 'Eltac'
}
