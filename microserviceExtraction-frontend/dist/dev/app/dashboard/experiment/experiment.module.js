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
var experiment_component_1 = require('./experiment.component');
var experiment_routes_1 = require('./experiment.routes');
var ExperimentModule = (function () {
    function ExperimentModule() {
    }
    ExperimentModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule, router_1.RouterModule.forRoot(experiment_routes_1.ExperimentRoutes)],
            declarations: [experiment_component_1.ExperimentComponent],
            exports: [experiment_component_1.ExperimentComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ExperimentModule);
    return ExperimentModule;
}());
exports.ExperimentModule = ExperimentModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZXhwZXJpbWVudC9leHBlcmltZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHNCQUE4QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQy9DLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHFDQUFvQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzdELGtDQUFpQyxxQkFBcUIsQ0FBQyxDQUFBO0FBUXZEO0lBQUE7SUFBZ0MsQ0FBQztJQU5qQztRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG1CQUFXLEVBQUMscUJBQVksRUFBQyxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxvQ0FBZ0IsQ0FBQyxDQUFDO1lBQzFFLFlBQVksRUFBRSxDQUFDLDBDQUFtQixDQUFDO1lBQ25DLE9BQU8sRUFBRSxDQUFDLDBDQUFtQixDQUFDO1NBQ2pDLENBQUM7O3dCQUFBO0lBRThCLHVCQUFDO0FBQUQsQ0FBaEMsQUFBaUMsSUFBQTtBQUFwQix3QkFBZ0IsbUJBQUksQ0FBQSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2V4cGVyaW1lbnQvZXhwZXJpbWVudC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRXhwZXJpbWVudENvbXBvbmVudCB9IGZyb20gJy4vZXhwZXJpbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhwZXJpbWVudFJvdXRlcyB9IGZyb20gJy4vZXhwZXJpbWVudC5yb3V0ZXMnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtGb3Jtc01vZHVsZSxDb21tb25Nb2R1bGUsUm91dGVyTW9kdWxlLmZvclJvb3QoRXhwZXJpbWVudFJvdXRlcyldLFxuICAgIGRlY2xhcmF0aW9uczogW0V4cGVyaW1lbnRDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtFeHBlcmltZW50Q29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIEV4cGVyaW1lbnRNb2R1bGUgeyB9XG4iXX0=
