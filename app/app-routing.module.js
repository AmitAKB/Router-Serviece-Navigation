"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var userList_component_1 = require("./userList.component");
var userDetails_component_1 = require("./userDetails.component");
var userIndividual_component_1 = require("./userIndividual.component");
var page_not_found_component_1 = require("./page-not-found.component");
var routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: userList_component_1.UserListComponent },
    { path: 'details', component: userDetails_component_1.UserDetailsComponent },
    { path: 'list/:id', component: userIndividual_component_1.UserIndividualListComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [userList_component_1.UserListComponent, userDetails_component_1.UserDetailsComponent, userIndividual_component_1.UserIndividualListComponent, page_not_found_component_1.PageNotFoundComponent];
//# sourceMappingURL=app-routing.module.js.map