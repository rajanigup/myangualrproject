import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { EmplistComponent } from './emplist/emplist.component';
import { FormsModule } from '@angular/forms';
import { DexampleComponent } from './dexample/dexample.component';
import { MyCustomDirectiveDirective } from './dexample/my-custom-directive.directive';
import { PexampleComponent } from './pexample/pexample.component';
import { MycustomPipe } from './pexample/mycustom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    EmplistComponent,
    DexampleComponent,
    MyCustomDirectiveDirective,
    PexampleComponent,
    MycustomPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
