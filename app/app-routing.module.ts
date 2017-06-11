import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './userList.component';
import { UserDetailsComponent } from './userDetails.component';
import { UserIndividualListComponent } from './userIndividual.component';
import {PageNotFoundComponent} from './page-not-found.component';


const routes: Routes = [
    { path: '', redirectTo:'/list', pathMatch:'full' }, //prefix it not changing the url path
    { path: 'list', component: UserListComponent },
    { path: 'details', component: UserDetailsComponent },
    { path: 'list/:id', component: UserIndividualListComponent },
    { path: '**', component: PageNotFoundComponent },
]

@NgModule({
	imports: [
	 	RouterModule.forRoot(routes)
	 ],
	exports: [
		RouterModule
	]	
})

export class AppRoutingModule{

}

export const routingComponents = [ UserListComponent, UserDetailsComponent, UserIndividualListComponent, PageNotFoundComponent]

