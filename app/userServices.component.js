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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var UserServices = (function () {
    function UserServices(_http) {
        this._http = _http;
        this._url = "http://localhost:8888/api/v1/users";
    }
    UserServices.prototype.getUserService = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler);
    };
    UserServices.prototype.getIndividualUserService = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler);
    };
    UserServices.prototype._errorHandler = function (_error) {
        return Observable_1.Observable.throw(_error || "server error 404");
    };
    return UserServices;
}());
UserServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserServices);
exports.UserServices = UserServices;
//# sourceMappingURL=userServices.component.js.map