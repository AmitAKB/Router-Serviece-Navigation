import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';


@NgModule({

  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, routingComponents],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}

