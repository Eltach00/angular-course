import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'child-comp',
  template: ` <div>{{ clicks }}</div>`,
})
export class ChildComponent {
  clicks = 0
  increment() {
    this.clicks++
  }
  decrement() {
    this.clicks--
  }
}
