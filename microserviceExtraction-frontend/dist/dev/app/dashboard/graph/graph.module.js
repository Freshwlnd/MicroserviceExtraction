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
var graph_component_1 = require('./graph.component');
var graph_routes_1 = require('./graph.routes');
var GraphModule = (function () {
    function GraphModule() {
    }
    GraphModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule, router_1.RouterModule.forRoot(graph_routes_1.GraphRoutes)],
            declarations: [graph_component_1.GraphComponent],
            exports: [graph_component_1.GraphComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], GraphModule);
    return GraphModule;
}());
exports.GraphModule = GraphModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZ3JhcGgvZ3JhcGgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsc0JBQThCLGdCQUFnQixDQUFDLENBQUE7QUFDL0MsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsdUJBQTRCLGlCQUFpQixDQUFDLENBQUE7QUFDOUMsZ0NBQThCLG1CQUFtQixDQUFDLENBQUE7QUFDbEQsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFRN0M7SUFBQTtJQUEyQixDQUFDO0lBTjVCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsbUJBQVcsRUFBRSxxQkFBWSxFQUFFLHFCQUFZLENBQUMsT0FBTyxDQUFDLDBCQUFXLENBQUMsQ0FBQztZQUN2RSxZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDLGdDQUFjLENBQUM7U0FDNUIsQ0FBQzs7bUJBQUE7SUFFeUIsa0JBQUM7QUFBRCxDQUEzQixBQUE0QixJQUFBO0FBQWYsbUJBQVcsY0FBSSxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZ3JhcGgvZ3JhcGgubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgR3JhcGhDb21wb25lbnR9IGZyb20gJy4vZ3JhcGguY29tcG9uZW50JztcbmltcG9ydCB7IEdyYXBoUm91dGVzIH0gZnJvbSAnLi9ncmFwaC5yb3V0ZXMnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUuZm9yUm9vdChHcmFwaFJvdXRlcyldLFxuICAgIGRlY2xhcmF0aW9uczogW0dyYXBoQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbR3JhcGhDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgR3JhcGhNb2R1bGUgeyB9XG4iXX0=
