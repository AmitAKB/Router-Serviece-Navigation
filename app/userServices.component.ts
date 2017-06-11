import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class UserServices{
	private _url: string = "http://localhost:8888/api/v1/users";

	constructor(private _http: Http){

	}

	getUserService(){
		return this._http.get(this._url)
		.map( (response: Response) => response.json())
		.catch(this._errorHandler);
	}
	getIndividualUserService(){
		return this._http.get(this._url)
		.map( (response: Response) => response.json())
		.catch(this._errorHandler);
	}
	_errorHandler(_error: Response){
		return Observable.throw(_error||"server error 404");
	}
}