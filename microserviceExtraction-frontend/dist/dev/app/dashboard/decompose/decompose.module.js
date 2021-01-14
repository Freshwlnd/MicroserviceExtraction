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
var decompose_component_1 = require('./decompose.component');
var decompose_routes_1 = require('./decompose.routes');
var DecomposeModule = (function () {
    function DecomposeModule() {
    }
    DecomposeModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule, router_1.RouterModule.forRoot(decompose_routes_1.DecomposeRoutes)],
            declarations: [decompose_component_1.DecomposeComponent],
            exports: [decompose_component_1.DecomposeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DecomposeModule);
    return DecomposeModule;
}());
exports.DecomposeModule = DecomposeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGVjb21wb3NlL2RlY29tcG9zZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxzQkFBOEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvQyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx1QkFBNEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM5QyxvQ0FBbUMsdUJBQXVCLENBQUMsQ0FBQTtBQUMzRCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQVFuRDtJQUFBO0lBQStCLENBQUM7SUFOaEM7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxtQkFBVyxFQUFFLHFCQUFZLEVBQUUscUJBQVksQ0FBQyxPQUFPLENBQUMsa0NBQWUsQ0FBQyxDQUFDO1lBQzNFLFlBQVksRUFBRSxDQUFDLHdDQUFrQixDQUFDO1lBQ2xDLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixDQUFDO1NBQ2hDLENBQUM7O3VCQUFBO0lBRTZCLHNCQUFDO0FBQUQsQ0FBL0IsQUFBZ0MsSUFBQTtBQUFuQix1QkFBZSxrQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZGVjb21wb3NlL2RlY29tcG9zZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEZWNvbXBvc2VDb21wb25lbnQgfSBmcm9tICcuL2RlY29tcG9zZS5jb21wb25lbnQnO1xuaW1wb3J0IHtEZWNvbXBvc2VSb3V0ZXN9IGZyb20gJy4vZGVjb21wb3NlLnJvdXRlcyc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZS5mb3JSb290KERlY29tcG9zZVJvdXRlcyldLFxuICAgIGRlY2xhcmF0aW9uczogW0RlY29tcG9zZUNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0RlY29tcG9zZUNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEZWNvbXBvc2VNb2R1bGUgeyB9XG4iXX0=
