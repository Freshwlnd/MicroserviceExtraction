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
var router_1 = require('@angular/router');
var forms_component_1 = require('./forms.component');
var FormModule = (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule
            ],
            declarations: [forms_component_1.FormComponent],
            exports: [forms_component_1.FormComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], FormModule);
    return FormModule;
}());
exports.FormModule = FormModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZm9ybXMvZm9ybXMubW9kdWxlIDIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQyxnQ0FBOEIsbUJBQW1CLENBQUMsQ0FBQTtBQVVsRDtJQUFBO0lBQTBCLENBQUM7SUFSM0I7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7YUFDZjtZQUNELFlBQVksRUFBRSxDQUFDLCtCQUFhLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsK0JBQWEsQ0FBQztTQUMzQixDQUFDOztrQkFBQTtJQUV3QixpQkFBQztBQUFELENBQTFCLEFBQTJCLElBQUE7QUFBZCxrQkFBVSxhQUFJLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9mb3Jtcy9mb3Jtcy5tb2R1bGUgMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9mb3Jtcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgUm91dGVyTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtGb3JtQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbRm9ybUNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBGb3JtTW9kdWxlIHsgfVxuIl19
