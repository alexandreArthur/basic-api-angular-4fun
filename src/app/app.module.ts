import { AnimalServiceService } from './services/animal-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimaisModule } from './initial-page/initial.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AnimaisModule
  ],
  providers: [
    AnimalServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
