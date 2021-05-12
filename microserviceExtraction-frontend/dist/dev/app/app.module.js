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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var shared_module_1 = require('./shared/shared.module');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_2 = require('ng2-bootstrap/ng2-bootstrap');
var home_module_1 = require('./dashboard/home/home.module');
var blankPage_module_1 = require('./dashboard/blank-page/blankPage.module');
var clone_module_1 = require('./dashboard/clone/clone.module');
var decompose_module_1 = require('./dashboard/decompose/decompose.module');
var microservices_module_1 = require('./dashboard/microservices/microservices.module');
var experiment_module_1 = require('./dashboard/experiment/experiment.module');
var index_1 = require('./shared/index');
var graph_module_1 = require("./dashboard/graph/graph.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.routes),
                shared_module_1.SharedModule.forRoot(),
                router_1.RouterModule,
                ng2_bootstrap_1.DropdownModule,
                ng2_bootstrap_2.ModalModule,
                home_module_1.HomeModule,
                blankPage_module_1.BlankPageModule,
                clone_module_1.CloneModule,
                decompose_module_1.DecomposeModule,
                graph_module_1.GraphModule,
                microservices_module_1.MicroservicesModule,
                experiment_module_1.ExperimentModule
            ],
            declarations: [app_component_1.AppComponent, index_1.SidebarComponent],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDJCQUF1QixjQUFjLENBQUMsQ0FBQTtBQUV0Qyw4QkFBNkIsd0JBQXdCLENBQUMsQ0FBQTtBQUV0RCw4QkFBK0IsNkJBQTZCLENBQUMsQ0FBQTtBQUM3RCw4QkFBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUUxRCw0QkFBMkIsOEJBQThCLENBQUMsQ0FBQTtBQUMxRCxpQ0FBZ0MseUNBQXlDLENBQUMsQ0FBQTtBQUMxRSw2QkFBNEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUM3RCxpQ0FBZ0Msd0NBQXdDLENBQUMsQ0FBQTtBQUN6RSxxQ0FBb0MsZ0RBQWdELENBQUMsQ0FBQTtBQUNyRixrQ0FBaUMsMENBQTBDLENBQUMsQ0FBQTtBQUU1RSxzQkFBK0IsZ0JBQWdCLENBQUMsQ0FBQTtBQUNoRCw2QkFBMEIsZ0NBQWdDLENBQUMsQ0FBQTtBQTRCM0Q7SUFBQTtJQUF5QixDQUFDO0lBMUIxQjtRQUFDLGVBQVEsQ0FBQztZQUNULE9BQU8sRUFBRTtnQkFDUixnQ0FBYTtnQkFDYixpQkFBVTtnQkFDVixxQkFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBTSxDQUFDO2dCQUM1Qiw0QkFBWSxDQUFDLE9BQU8sRUFBRTtnQkFDdEIscUJBQVk7Z0JBQ1osOEJBQWM7Z0JBQ2QsMkJBQVc7Z0JBQ1gsd0JBQVU7Z0JBQ1Ysa0NBQWU7Z0JBQ2YsMEJBQVc7Z0JBQ1Qsa0NBQWU7Z0JBQ2YsMEJBQVc7Z0JBQ1gsMENBQW1CO2dCQUNuQixvQ0FBZ0I7YUFDbEI7WUFDRCxZQUFZLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLHdCQUFnQixDQUFDO1lBQzlDLFNBQVMsRUFBRSxDQUFDO29CQUNYLE9BQU8sRUFBRSxzQkFBYTtvQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjtpQkFDM0IsQ0FBQztZQUNGLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FFekIsQ0FBQzs7aUJBQUE7SUFFdUIsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBIb21lTW9kdWxlIH0gZnJvbSAnLi9kYXNoYm9hcmQvaG9tZS9ob21lLm1vZHVsZSc7XG5pbXBvcnQgeyBCbGFua1BhZ2VNb2R1bGUgfSBmcm9tICcuL2Rhc2hib2FyZC9ibGFuay1wYWdlL2JsYW5rUGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2xvbmVNb2R1bGUgfSBmcm9tICcuL2Rhc2hib2FyZC9jbG9uZS9jbG9uZS5tb2R1bGUnO1xuaW1wb3J0IHsgRGVjb21wb3NlTW9kdWxlIH0gZnJvbSAnLi9kYXNoYm9hcmQvZGVjb21wb3NlL2RlY29tcG9zZS5tb2R1bGUnO1xuaW1wb3J0IHsgTWljcm9zZXJ2aWNlc01vZHVsZSB9IGZyb20gJy4vZGFzaGJvYXJkL21pY3Jvc2VydmljZXMvbWljcm9zZXJ2aWNlcy5tb2R1bGUnO1xuaW1wb3J0IHsgRXhwZXJpbWVudE1vZHVsZSB9IGZyb20gJy4vZGFzaGJvYXJkL2V4cGVyaW1lbnQvZXhwZXJpbWVudC5tb2R1bGUnO1xuXG5pbXBvcnQge1NpZGViYXJDb21wb25lbnR9IGZyb20gJy4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7R3JhcGhNb2R1bGV9IGZyb20gXCIuL2Rhc2hib2FyZC9ncmFwaC9ncmFwaC5tb2R1bGVcIjtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdEJyb3dzZXJNb2R1bGUsXG5cdFx0SHR0cE1vZHVsZSxcblx0XHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxuXHRcdFNoYXJlZE1vZHVsZS5mb3JSb290KCksXG5cdFx0Um91dGVyTW9kdWxlLFxuXHRcdERyb3Bkb3duTW9kdWxlLFxuXHRcdE1vZGFsTW9kdWxlLFxuXHRcdEhvbWVNb2R1bGUsXG5cdFx0QmxhbmtQYWdlTW9kdWxlLFxuXHRcdENsb25lTW9kdWxlLFxuICAgIERlY29tcG9zZU1vZHVsZSxcbiAgICBHcmFwaE1vZHVsZSxcbiAgICBNaWNyb3NlcnZpY2VzTW9kdWxlLFxuICAgIEV4cGVyaW1lbnRNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LCBTaWRlYmFyQ29tcG9uZW50XSxcblx0cHJvdmlkZXJzOiBbe1xuXHRcdHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsXG5cdFx0dXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXG5cdH1dLFxuXHRib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=
