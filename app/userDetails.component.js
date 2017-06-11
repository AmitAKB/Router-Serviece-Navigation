"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var userServices_component_1 = require("./userServices.component");
var UserDetailsComponent = (function () {
    function UserDetailsComponent(_userService) {
        this._userService = _userService;
        this.userDetails = [];
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUserService()
            .subscribe(function (resUserData) { return _this.userDetails = resUserData.data; }, function (resUserError) { return _this.errorMsg = resUserError; });
    };
    return UserDetailsComponent;
}());
UserDetailsComponent = __decorate([
    core_1.Component({
        selector: 'user-details',
        template: "<h1>User Details </h1>\n\t<h2>{{errorMsg}}</h2>\n\t<ul class=\"list-group\" *ngFor=\"let user of userDetails\">\n\t\t\t<li class=\"list-group-item\">{{user.first_name}} {{user.last_name}}</li>\n\t\t</ul>"
    }),
    __metadata("design:paramtypes", [userServices_component_1.UserServices])
], UserDetailsComponent);
exports.UserDetailsComponent = UserDetailsComponent;
//# sourceMappingURL=userDetails.component.js.map