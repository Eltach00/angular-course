import { Component, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <p *while="condition">Foo</p>
    <p *while="!condition">Bar</p>
    <button (click)="toggle()">Click</button>
  `,
})
export class AppComponent {
  condition = true
  toggle() {
    this.condition = !this.condition
  }
}
