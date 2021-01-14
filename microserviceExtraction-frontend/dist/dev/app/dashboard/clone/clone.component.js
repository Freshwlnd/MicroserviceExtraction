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
var core_1 = require('@angular/core');
var rest_service_1 = require('../../services/rest.service');
var CloneComponent = (function () {
    function CloneComponent(_rest) {
        this._rest = _rest;
        this.repositories = [];
    }
    CloneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._rest.listRepositories().subscribe(function (result) {
            _this.repositories = JSON.parse(result._body);
        }, function (error) {
        });
    };
    CloneComponent.prototype.submit = function () {
        var _this = this;
        console.log("Repository:  " + this.repository);
        this._rest.cloneRepository(this.repository).subscribe(function (result) {
            _this.repositories.unshift(JSON.parse(result._body));
        }, function (error) {
            alert("There was an error during cloning.");
        });
        console.log("Sent request");
    };
    CloneComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'clone-repo',
            templateUrl: './clone.component.html',
            providers: [rest_service_1.RestService]
        }), 
        __metadata('design:paramtypes', [rest_service_1.RestService])
    ], CloneComponent);
    return CloneComponent;
}());
exports.CloneComponent = CloneComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvY2xvbmUvY2xvbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsNkJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFVMUQ7SUFNRSx3QkFBb0IsS0FBbUI7UUFBbkIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUZ2QyxpQkFBWSxHQUF1QixFQUFFLENBQUM7SUFJdEMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxTQUFTLENBQ25DLFVBQUEsTUFBTTtZQUNGLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQyxFQUNELFVBQUEsS0FBSztRQUVMLENBQUMsQ0FDSixDQUFDO0lBRU4sQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFXQztRQVZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUNqRCxVQUFBLE1BQU07WUFDSixLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQ0osQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQXhDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1NBQ3pCLENBQUM7O3NCQUFBO0lBb0NGLHFCQUFDO0FBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtBQWxDWSxzQkFBYyxpQkFrQzFCLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9jbG9uZS9jbG9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL21vZGVscy9yZXBvc2l0b3J5Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnY2xvbmUtcmVwbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jbG9uZS5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1Jlc3RTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIENsb25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gIHJlcG9zaXRvcnkgOiBzdHJpbmc7XG5cbiAgcmVwb3NpdG9yaWVzIDogQXJyYXk8UmVwb3NpdG9yeT4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZXN0IDogUmVzdFNlcnZpY2Upe1xuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuX3Jlc3QubGlzdFJlcG9zaXRvcmllcygpLnN1YnNjcmliZShcbiAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnJlcG9zaXRvcmllcyA9IEpTT04ucGFyc2UocmVzdWx0Ll9ib2R5KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgLy9hbGVydChlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgKTtcblxuICB9XG5cbiAgc3VibWl0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwiUmVwb3NpdG9yeTogIFwiICsgdGhpcy5yZXBvc2l0b3J5KTtcbiAgICB0aGlzLl9yZXN0LmNsb25lUmVwb3NpdG9yeSh0aGlzLnJlcG9zaXRvcnkpLnN1YnNjcmliZShcbiAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGlzLnJlcG9zaXRvcmllcy51bnNoaWZ0KEpTT04ucGFyc2UocmVzdWx0Ll9ib2R5KSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICBhbGVydChcIlRoZXJlIHdhcyBhbiBlcnJvciBkdXJpbmcgY2xvbmluZy5cIik7XG4gICAgICAgIH1cbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFwiU2VudCByZXF1ZXN0XCIpO1xuICB9XG59XG4iXX0=
