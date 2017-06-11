import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserServices } from './userServices.component';


@Component({
	selector:'user-list',
	template:`<h1> User List </h1>
	<h2>This is individual Data : {{userId}} </h2>
	<h3>{{userDetails}}</h3>
	<a (click)="getPrevious()">Previous</a>
	<a (click)="getNext()">Next</a>
	<br/>
	<a (click)="getBack()">Back</a>
	`
})

export class UserIndividualListComponent implements OnInit{

	userDetails= [];
	public userId;
	constructor(private route: ActivatedRoute, 
				private _userService: UserServices, 
				private router: Router){}
	// constructor(private _userService: UserServices){

	// }

	ngOnInit(){
		this.route.params.subscribe((params: Params)=> {
			let id = params['id'];
			this.userId = id;
		})
		//Snapshot: it is creating problem 
		// let id = this.route.snapshot.params['id'];
		// this.userId = id;
		// this._userService.getIndividualUserService()
		// .subscribe(resUserData => this.userDetails = resUserData.data,
		// 			resUserError => this.errorMsg = resUserError);
	}

	getPrevious(){
		let previousId = this.userId - 1;
		this.router.navigate(['/list', previousId]);
	}

	getNext(){
		let nextId = this.userId + 1;
		this.router.navigate(['/list', nextId]);
	}

	getBack(){
		let selectedId = this.userId ? this.userId : null;
		// this.router.navigate(['/list', {id: selectedId}]) this is only redirecting to path
		this.router.navigate(['../', { id: selectedId}], { relativeTo: this.route });
	}
}