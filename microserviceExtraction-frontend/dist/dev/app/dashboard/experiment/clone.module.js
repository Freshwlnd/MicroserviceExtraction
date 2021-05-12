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
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var clone_component_1 = require('./clone.component');
var decompose_routes_1 = require('../decompose/decompose.routes');
var CloneModule = (function () {
    function CloneModule() {
    }
    CloneModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule, router_1.RouterModule.forRoot(decompose_routes_1.DecomposeRoutes)],
            declarations: [clone_component_1.CloneComponent],
            exports: [clone_component_1.CloneComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CloneModule);
    return CloneModule;
}());
exports.CloneModule = CloneModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZXhwZXJpbWVudC9jbG9uZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxzQkFBOEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvQyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCxpQ0FBZ0MsK0JBQStCLENBQUMsQ0FBQTtBQVFoRTtJQUFBO0lBQTJCLENBQUM7SUFONUI7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxtQkFBVyxFQUFDLHFCQUFZLEVBQUMscUJBQVksQ0FBQyxPQUFPLENBQUMsa0NBQWUsQ0FBQyxDQUFDO1lBQ3pFLFlBQVksRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDOUIsT0FBTyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztTQUM1QixDQUFDOzttQkFBQTtJQUV5QixrQkFBQztBQUFELENBQTNCLEFBQTRCLElBQUE7QUFBZixtQkFBVyxjQUFJLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9leHBlcmltZW50L2Nsb25lLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbG9uZUNvbXBvbmVudCB9IGZyb20gJy4vY2xvbmUuY29tcG9uZW50JztcbmltcG9ydCB7IERlY29tcG9zZVJvdXRlcyB9IGZyb20gJy4uL2RlY29tcG9zZS9kZWNvbXBvc2Uucm91dGVzJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsQ29tbW9uTW9kdWxlLFJvdXRlck1vZHVsZS5mb3JSb290KERlY29tcG9zZVJvdXRlcyldLFxuICAgIGRlY2xhcmF0aW9uczogW0Nsb25lQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbQ2xvbmVDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQ2xvbmVNb2R1bGUgeyB9XG4iXX0=
