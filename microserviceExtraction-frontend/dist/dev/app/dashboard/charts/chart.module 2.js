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
var chart_component_1 = require('./chart.component');
var ChartModule = (function () {
    function ChartModule() {
    }
    ChartModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule],
            declarations: [chart_component_1.ChartComponent],
            exports: [chart_component_1.ChartComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartModule);
    return ChartModule;
}());
exports.ChartModule = ChartModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvY2hhcnRzL2NoYXJ0Lm1vZHVsZSAyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0MsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFRbkQ7SUFBQTtJQUEyQixDQUFDO0lBTjVCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztZQUN2QixZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDLGdDQUFjLENBQUM7U0FDNUIsQ0FBQzs7bUJBQUE7SUFFeUIsa0JBQUM7QUFBRCxDQUEzQixBQUE0QixJQUFBO0FBQWYsbUJBQVcsY0FBSSxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvY2hhcnRzL2NoYXJ0Lm1vZHVsZSAyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFydC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0NoYXJ0Q29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbQ2hhcnRDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQ2hhcnRNb2R1bGUgeyB9XG4iXX0=
