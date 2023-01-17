import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'item-info',
  template: `
    <h2>Model {{ id }}</h2>
    <h2>Product {{ product }}</h2>
    <h2>Price {{ price }}</h2>
    <router-outlet></router-outlet>
  `,
})
export class ItemComponent {
  id: number | undefined
  product: any
  price: any
  subcription: Subscription
  paramSubcription: Subscription
  constructor(private route: ActivatedRoute) {
    this.subcription = this.route.params.subscribe(
      (params) => (this.id = params.id)
    )
    this.paramSubcription = route.queryParams.subscribe((params) => {
      this.price = params.price
      this.product = params.product
    })
  }
}
