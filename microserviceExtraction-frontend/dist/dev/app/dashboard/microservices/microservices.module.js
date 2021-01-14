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
var microservices_component_1 = require('./microservices.component');
var decompose_routes_1 = require('../decompose/decompose.routes');
var MicroservicesModule = (function () {
    function MicroservicesModule() {
    }
    MicroservicesModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule, router_1.RouterModule.forRoot(decompose_routes_1.DecomposeRoutes)],
            declarations: [microservices_component_1.MicroservicesComponent],
            exports: [microservices_component_1.MicroservicesComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MicroservicesModule);
    return MicroservicesModule;
}());
exports.MicroservicesModule = MicroservicesModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvbWljcm9zZXJ2aWNlcy9taWNyb3NlcnZpY2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHNCQUE4QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQy9DLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHdDQUF1QywyQkFBMkIsQ0FBQyxDQUFBO0FBQ25FLGlDQUFnQywrQkFBK0IsQ0FBQyxDQUFBO0FBUWhFO0lBQUE7SUFBbUMsQ0FBQztJQU5wQztRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG1CQUFXLEVBQUMscUJBQVksRUFBQyxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxrQ0FBZSxDQUFDLENBQUM7WUFDekUsWUFBWSxFQUFFLENBQUMsZ0RBQXNCLENBQUM7WUFDdEMsT0FBTyxFQUFFLENBQUMsZ0RBQXNCLENBQUM7U0FDcEMsQ0FBQzs7MkJBQUE7SUFFaUMsMEJBQUM7QUFBRCxDQUFuQyxBQUFvQyxJQUFBO0FBQXZCLDJCQUFtQixzQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvbWljcm9zZXJ2aWNlcy9taWNyb3NlcnZpY2VzLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNaWNyb3NlcnZpY2VzQ29tcG9uZW50IH0gZnJvbSAnLi9taWNyb3NlcnZpY2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWNvbXBvc2VSb3V0ZXMgfSBmcm9tICcuLi9kZWNvbXBvc2UvZGVjb21wb3NlLnJvdXRlcyc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLENvbW1vbk1vZHVsZSxSb3V0ZXJNb2R1bGUuZm9yUm9vdChEZWNvbXBvc2VSb3V0ZXMpXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtNaWNyb3NlcnZpY2VzQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbTWljcm9zZXJ2aWNlc0NvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNaWNyb3NlcnZpY2VzTW9kdWxlIHsgfVxuIl19
