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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvY2xvbmUvY2xvbmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsc0JBQThCLGdCQUFnQixDQUFDLENBQUE7QUFDL0MsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFDbkQsaUNBQWdDLCtCQUErQixDQUFDLENBQUE7QUFRaEU7SUFBQTtJQUEyQixDQUFDO0lBTjVCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsbUJBQVcsRUFBQyxxQkFBWSxFQUFDLHFCQUFZLENBQUMsT0FBTyxDQUFDLGtDQUFlLENBQUMsQ0FBQztZQUN6RSxZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDLGdDQUFjLENBQUM7U0FDNUIsQ0FBQzs7bUJBQUE7SUFFeUIsa0JBQUM7QUFBRCxDQUEzQixBQUE0QixJQUFBO0FBQWYsbUJBQVcsY0FBSSxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvY2xvbmUvY2xvbmUubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENsb25lQ29tcG9uZW50IH0gZnJvbSAnLi9jbG9uZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVjb21wb3NlUm91dGVzIH0gZnJvbSAnLi4vZGVjb21wb3NlL2RlY29tcG9zZS5yb3V0ZXMnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtGb3Jtc01vZHVsZSxDb21tb25Nb2R1bGUsUm91dGVyTW9kdWxlLmZvclJvb3QoRGVjb21wb3NlUm91dGVzKV0sXG4gICAgZGVjbGFyYXRpb25zOiBbQ2xvbmVDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtDbG9uZUNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDbG9uZU1vZHVsZSB7IH1cbiJdfQ==
