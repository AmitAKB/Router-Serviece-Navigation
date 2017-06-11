import { Component } from '@angular/core';
import { UserServices } from './userServices.component';

@Component({
  selector: 'my-app',
  template: `<h1> Routing Applications </h1>
  			<nav>
  				<a routerLink="/" routerLinkActive="active"> Home </a>
  				<a routerLink="list" routerLinkActive="active"> List </a>
  				<a routerLink="details" routerLinkActive="active"> Details </a>
  			</nav>
  			<router-outlet></router-outlet>
  			`,

  providers: [
  		UserServices
  	]
})
export class AppComponent { 
	
}
