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
var index_1 = require('./shared/index');
var config_service_1 = require('./services/config.service');
var datapassing_service_1 = require("./services/datapassing.service");
var AppComponent = (function () {
    function AppComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        console.log('Environment config', index_1.Config);
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            templateUrl: 'app.component.html',
            providers: [config_service_1.ConfigService, datapassing_service_1.DataPassingService]
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEMsZUFBZSxDQUFDLENBQUE7QUFDNUQsc0JBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFDeEMsK0JBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsb0NBQWlDLGdDQUFnQyxDQUFDLENBQUE7QUFhbEU7SUFFQyxzQkFBbUIsZ0JBQWlDO1FBRW5ELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLGNBQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFiRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLHdDQUFrQixDQUFDO1NBQzlDLENBQUM7O29CQUFBO0lBU0YsbUJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLG9CQUFZLGVBT3hCLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7RGF0YVBhc3NpbmdTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9kYXRhcGFzc2luZy5zZXJ2aWNlXCI7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBtYWluIGFwcGxpY2F0aW9uIGNvbXBvbmVudC4gV2l0aGluIHRoZSBAUm91dGVzIGFubm90YXRpb24gaXMgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlXG4gKiBhcHBsaWNhdGlvbnMgcm91dGVzLCBjb25maWd1cmluZyB0aGUgcGF0aHMgZm9yIHRoZSBsYXp5IGxvYWRlZCBjb21wb25lbnRzIChIb21lQ29tcG9uZW50LCBBYm91dENvbXBvbmVudCkuXG4gKi9cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ3NkLWFwcCcsXG5cdHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcblx0cHJvdmlkZXJzOiBbQ29uZmlnU2VydmljZSwgRGF0YVBhc3NpbmdTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cdHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuXHRcdC8vIFlvdSBuZWVkIHRoaXMgc21hbGwgaGFjayBpbiBvcmRlciB0byBjYXRjaCBhcHBsaWNhdGlvbiByb290IHZpZXcgY29udGFpbmVyIHJlZlxuXHRcdHRoaXMudmlld0NvbnRhaW5lclJlZiA9IHZpZXdDb250YWluZXJSZWY7XG5cdFx0Y29uc29sZS5sb2coJ0Vudmlyb25tZW50IGNvbmZpZycsIENvbmZpZyk7XG5cdH1cbn1cbiJdfQ==
