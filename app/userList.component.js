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
var router_1 = require("@angular/router");
var UserListComponent = (function () {
    function UserListComponent(route, _userService, router) {
        this.route = route;
        this._userService = _userService;
        this.router = router;
        this.userDetails = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.userId = id;
        });
        this._userService.getUserService()
            .subscribe(function (resUserData) { return _this.userDetails = resUserData.data; }, function (resUserError) { return _this.errorMsg = resUserError; });
    };
    UserListComponent.prototype.onSelect = function (user) {
        // this.router.navigate(['list', user._id]) Static url for redirecting the path
        this.router.navigate([user._id], { relativeTo: this.route }); //this path used for relative navigation
        // do not change the url every location/place we need to change only absolute location/place
    };
    UserListComponent.prototype.isSelected = function (user) {
        return user._id === this.userId;
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    core_1.Component({
        selector: 'user-list',
        template: "<h1> User List </h1>\n\t<h2>{{errorMsg}}</h2>\n\t<ul class=\"list-group\" (click)=\"onSelect(user)\" [class.selected]=\"isSelected(user)\"   *ngFor=\"let user of userDetails\">\n\t\t\t<li class=\"list-group-item\">{{user.first_name}}</li>\n\t\t</ul>",
        styles: [
            "ul.selected{\n\t\tcolor:red;\n\t}\n\t"
        ]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        userServices_component_1.UserServices,
        router_1.Router])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=userList.component.js.map