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
var grid_component_1 = require('./grid.component');
var GridModule = (function () {
    function GridModule() {
    }
    GridModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule],
            declarations: [grid_component_1.GridComponent],
            exports: [grid_component_1.GridComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], GridModule);
    return GridModule;
}());
exports.GridModule = GridModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZ3JpZC9ncmlkLm1vZHVsZSAyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0MsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFRakQ7SUFBQTtJQUEwQixDQUFDO0lBTjNCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztZQUN2QixZQUFZLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1lBQzdCLE9BQU8sRUFBRSxDQUFDLDhCQUFhLENBQUM7U0FDM0IsQ0FBQzs7a0JBQUE7SUFFd0IsaUJBQUM7QUFBRCxDQUExQixBQUEyQixJQUFBO0FBQWQsa0JBQVUsYUFBSSxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZ3JpZC9ncmlkLm1vZHVsZSAyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEdyaWRDb21wb25lbnQgfSBmcm9tICcuL2dyaWQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtHcmlkQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbR3JpZENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBHcmlkTW9kdWxlIHsgfVxuIl19
