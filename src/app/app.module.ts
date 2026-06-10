import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortafolioComponent } from './portafolio/portafolio/portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [PortafolioComponent]
})
export class AppModule { }
