import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplistComponent } from './emplist/emplist.component';
import { FormsModule } from '@angular/forms';
import { DefaultColorOnEventDirective } from './emplist/directives/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    DefaultColorOnEventDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
