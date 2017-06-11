import { Component, OnInit} from '@angular/core';
import { UserServices } from './userServices.component';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
	selector:'user-list',
	template:`<h1> User List </h1>
	<h2>{{errorMsg}}</h2>
	<ul class="list-group" (click)="onSelect(user)" [class.selected]="isSelected(user)"   *ngFor="let user of userDetails">
			<li class="list-group-item">{{user.first_name}}</li>
		</ul>`,
	styles:[
	`ul.selected{
		color:red;
	}
	`]
})

export class UserListComponent implements OnInit{

	userDetails= [];
	errorMsg: string;
	public userId;

	constructor(private route: ActivatedRoute, 
				private _userService: UserServices, 
				private router: Router
			){}

	ngOnInit(){
		this.route.params.subscribe((params: Params)=> {
			let id = params['id'];
			this.userId = id;
		})
		this._userService.getUserService()
		.subscribe(resUserData => this.userDetails = resUserData.data,
					resUserError => this.errorMsg = resUserError);
	}

	onSelect(user){
		// this.router.navigate(['list', user._id]) Static url for redirecting the path
		this.router.navigate([user._id], {relativeTo: this.route}); //this path used for relative navigation
		// do not change the url every location/place we need to change only absolute location/place
	}

	isSelected(user){
		return user._id === this.userId;
	}
}