import { Component, OnInit } from '@angular/core';
import { UserServices } from './userServices.component';

@Component({
	selector:'user-details',
	template:`<h1>User Details </h1>
	<h2>{{errorMsg}}</h2>
	<ul class="list-group" *ngFor="let user of userDetails">
			<li class="list-group-item">{{user.first_name}} {{user.last_name}}</li>
		</ul>`
})

export class UserDetailsComponent implements OnInit{
	
	userDetails = [];
	errorMsg: string;

	constructor(private _userService: UserServices){}
	
	ngOnInit(){
		this._userService.getUserService()
		.subscribe(resUserData => this.userDetails = resUserData.data,
		resUserError => this.errorMsg = resUserError);
	}
}