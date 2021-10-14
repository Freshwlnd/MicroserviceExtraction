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
            _this.repositories = JSON.parse(result["_body"]);
        }, function (error) {
        });
    };
    CloneComponent.prototype.submit = function () {
        var _this = this;
        console.log("Repository:  " + this.repository);
        this._rest.cloneRepository(this.repository).subscribe(function (result) {
            _this.repositories.unshift(JSON.parse(result["_body"]));
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvY2xvbmUvY2xvbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsNkJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFVMUQ7SUFNRSx3QkFBb0IsS0FBbUI7UUFBbkIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUZ2QyxpQkFBWSxHQUF1QixFQUFFLENBQUM7SUFJdEMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxTQUFTLENBQ25DLFVBQUEsTUFBTTtZQUdGLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxNQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM3RCxDQUFDLEVBQ0QsVUFBQSxLQUFLO1FBRUwsQ0FBQyxDQUNKLENBQUM7SUFFTixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQWFDO1FBWkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQ2pELFVBQUEsTUFBTTtZQUdKLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUUsTUFBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUNKLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUE1Q0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUN6QixDQUFDOztzQkFBQTtJQXdDRixxQkFBQztBQUFELENBdENBLEFBc0NDLElBQUE7QUF0Q1ksc0JBQWMsaUJBc0MxQixDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvY2xvbmUvY2xvbmUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVzdC5zZXJ2aWNlJztcbmltcG9ydCB7IFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVwb3NpdG9yeS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2Nsb25lLXJlcG8nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2xvbmUuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtSZXN0U2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDbG9uZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICByZXBvc2l0b3J5IDogc3RyaW5nO1xuXG4gIHJlcG9zaXRvcmllcyA6IEFycmF5PFJlcG9zaXRvcnk+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVzdCA6IFJlc3RTZXJ2aWNlKXtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLl9yZXN0Lmxpc3RSZXBvc2l0b3JpZXMoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgLy8gdGhpcy5yZXBvc2l0b3JpZXMgPSBKU09OLnBhcnNlKHJlc3VsdC5fYm9keSk7XG4gICAgICAgICAgICAgIC8vIHRoaXMucmVwb3NpdG9yaWVzID0gSlNPTi5wYXJzZShyZXN1bHRbXCJfYm9keVwiXSk7XG4gICAgICAgICAgICAgIHRoaXMucmVwb3NpdG9yaWVzID0gSlNPTi5wYXJzZSgocmVzdWx0IGFzIGFueSlbXCJfYm9keVwiXSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIC8vYWxlcnQoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICk7XG5cbiAgfVxuXG4gIHN1Ym1pdCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhcIlJlcG9zaXRvcnk6ICBcIiArIHRoaXMucmVwb3NpdG9yeSk7XG4gICAgdGhpcy5fcmVzdC5jbG9uZVJlcG9zaXRvcnkodGhpcy5yZXBvc2l0b3J5KS5zdWJzY3JpYmUoXG4gICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5yZXBvc2l0b3JpZXMudW5zaGlmdChKU09OLnBhcnNlKHJlc3VsdC5fYm9keSkpO1xuICAgICAgICAgIC8vIHRoaXMucmVwb3NpdG9yaWVzLnVuc2hpZnQoSlNPTi5wYXJzZShyZXN1bHRbXCJfYm9keVwiXSkpO1xuICAgICAgICAgIHRoaXMucmVwb3NpdG9yaWVzLnVuc2hpZnQoSlNPTi5wYXJzZSgocmVzdWx0IGFzIGFueSlbXCJfYm9keVwiXSkpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgYWxlcnQoXCJUaGVyZSB3YXMgYW4gZXJyb3IgZHVyaW5nIGNsb25pbmcuXCIpO1xuICAgICAgICB9XG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhcIlNlbnQgcmVxdWVzdFwiKTtcbiAgfVxufVxuIl19
