import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { ChildComponent } from './child.component'
import { DataModule } from './data/data.module'
import { BoldDirective } from './bold.directive'
import { WhileDirective } from './while.directive'

@NgModule({
  imports: [BrowserModule, DataModule],
  declarations: [AppComponent, ChildComponent, BoldDirective, WhileDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
