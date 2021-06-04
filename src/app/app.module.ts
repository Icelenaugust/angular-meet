import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeImageComponent } from './home-image/home-image.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LightComponent } from './light/light.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeImageComponent,
    NavbarComponent,
    LightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
