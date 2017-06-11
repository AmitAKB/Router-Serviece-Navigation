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
var router_1 = require("@angular/router");
var userServices_component_1 = require("./userServices.component");
var UserIndividualListComponent = (function () {
    function UserIndividualListComponent(route, _userService, router) {
        this.route = route;
        this._userService = _userService;
        this.router = router;
        this.userDetails = [];
    }
    // constructor(private _userService: UserServices){
    // }
    UserIndividualListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.userId = id;
        });
        //Snapshot: it is creating problem 
        // let id = this.route.snapshot.params['id'];
        // this.userId = id;
        // this._userService.getIndividualUserService()
        // .subscribe(resUserData => this.userDetails = resUserData.data,
        // 			resUserError => this.errorMsg = resUserError);
    };
    UserIndividualListComponent.prototype.getPrevious = function () {
        var previousId = this.userId - 1;
        this.router.navigate(['/list', previousId]);
    };
    UserIndividualListComponent.prototype.getNext = function () {
        var nextId = this.userId + 1;
        this.router.navigate(['/list', nextId]);
    };
    UserIndividualListComponent.prototype.getBack = function () {
        var selectedId = this.userId ? this.userId : null;
        // this.router.navigate(['/list', {id: selectedId}]) this is only redirecting to path
        this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
    };
    return UserIndividualListComponent;
}());
UserIndividualListComponent = __decorate([
    core_1.Component({
        selector: 'user-list',
        template: "<h1> User List </h1>\n\t<h2>This is individual Data : {{userId}} </h2>\n\t<h3>{{userDetails}}</h3>\n\t<a (click)=\"getPrevious()\">Previous</a>\n\t<a (click)=\"getNext()\">Next</a>\n\t<br/>\n\t<a (click)=\"getBack()\">Back</a>\n\t"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        userServices_component_1.UserServices,
        router_1.Router])
], UserIndividualListComponent);
exports.UserIndividualListComponent = UserIndividualListComponent;
//# sourceMappingURL=userIndividual.component.js.map