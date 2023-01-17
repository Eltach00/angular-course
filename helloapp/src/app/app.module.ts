import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'
import { AboutComponent } from './about.component'
import { HomeComponent } from './home.component'
import { NotFoundComponent } from './not-found.component'
import { ItemComponent } from './item.component'
import { ItemDetailsComponent } from './child-components/item.details.component'
import { ItemStatComponent } from './child-components/item.stats.component'
import { AboutGuard } from './guard/about.guard'
import { ExitAboutGuard } from './guard/exit.about.guard'
import { FormatPipe } from './pipes/format.pipe'

const itemRoutes = [
  { path: 'details', component: ItemDetailsComponent },
  { path: 'stat', component: ItemStatComponent },
]

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AboutGuard],
    canDeactivate: [ExitAboutGuard],
  },
  { path: 'item/:id', component: ItemComponent, children: itemRoutes },
]

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ItemComponent,
    ItemDetailsComponent,
    ItemStatComponent,
    FormatPipe,
  ],
  providers: [AboutGuard, ExitAboutGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
