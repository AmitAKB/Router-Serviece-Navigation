"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var userServices_component_1 = require("./userServices.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1> Routing Applications </h1>\n  \t\t\t<nav>\n  \t\t\t\t<a routerLink=\"/\" routerLinkActive=\"active\"> Home </a>\n  \t\t\t\t<a routerLink=\"list\" routerLinkActive=\"active\"> List </a>\n  \t\t\t\t<a routerLink=\"details\" routerLinkActive=\"active\"> Details </a>\n  \t\t\t</nav>\n  \t\t\t<router-outlet></router-outlet>\n  \t\t\t",
        providers: [
            userServices_component_1.UserServices
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map