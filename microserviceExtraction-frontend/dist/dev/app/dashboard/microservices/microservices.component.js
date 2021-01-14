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
var rest_service_1 = require('../../services/rest.service');
var datapassing_service_1 = require("../../services/datapassing.service");
var router_1 = require('@angular/router');
var MicroservicesComponent = (function () {
    function MicroservicesComponent(_rest, _datapassingService, _router) {
        this._rest = _rest;
        this._datapassingService = _datapassingService;
        this._router = _router;
        this.decompositions = [];
    }
    MicroservicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._rest.listDecompositions().subscribe(function (result) {
            _this.decompositions = JSON.parse(result._body);
        }, function (error) {
        });
    };
    MicroservicesComponent.prototype.parameterString = function (parameters) {
        if (parameters !== null) {
            var parameterString = "Strategies: [ ";
            if (parameters.logicalCoupling == true) {
                parameterString = parameterString + " LogicalCoupling ";
            }
            if (parameters.semanticCoupling == true) {
                parameterString = parameterString + " SemanticCoupling ";
            }
            if (parameters.contributorCoupling == true) {
                parameterString = parameterString + " ContributorCoupling ";
            }
            parameterString = parameterString + " ]";
            parameterString = parameterString + ", numPartitions: [ " + parameters.numServices + " ]";
            parameterString = parameterString + ", maxComponentSize: [ " + parameters.sizeThreshold + " ]";
            if (parameters.logicalCoupling == true) {
                parameterString = parameterString + ", historyInterval: [ " + parameters.intervalSeconds + "s ]";
            }
            return parameterString;
        }
        else {
            return "No Parameters";
        }
    };
    MicroservicesComponent.prototype.selectDecomposition = function (decomp) {
        this._datapassingService.setRepository(decomp.repo);
        this._router.navigate(['/graph', decomp.decompositionId]);
    };
    MicroservicesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'microservices',
            templateUrl: './microservices.component.html',
            providers: [rest_service_1.RestService]
        }), 
        __metadata('design:paramtypes', [rest_service_1.RestService, datapassing_service_1.DataPassingService, router_1.Router])
    ], MicroservicesComponent);
    return MicroservicesComponent;
}());
exports.MicroservicesComponent = MicroservicesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvbWljcm9zZXJ2aWNlcy9taWNyb3NlcnZpY2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELDZCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzFELG9DQUFpQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBQ3RFLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBU3pDO0lBSUUsZ0NBQW9CLEtBQW1CLEVBQVUsbUJBQXVDLEVBQVUsT0FBZTtRQUE3RixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGakgsbUJBQWMsR0FBbUIsRUFBRSxDQUFDO0lBSXBDLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUMsU0FBUyxDQUNyQyxVQUFBLE1BQU07WUFDRixLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25ELENBQUMsRUFDRCxVQUFBLEtBQUs7UUFFTCxDQUFDLENBQ0osQ0FBQztJQUVOLENBQUM7SUFFRCxnREFBZSxHQUFmLFVBQWdCLFVBQWM7UUFFNUIsRUFBRSxDQUFBLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDdEIsSUFBSSxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7WUFFdkMsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNyQyxlQUFlLEdBQUcsZUFBZSxHQUFHLG1CQUFtQixDQUFDO1lBQzFELENBQUM7WUFFRCxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDdEMsZUFBZSxHQUFHLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQztZQUMzRCxDQUFDO1lBRUQsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLG1CQUFtQixJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ3pDLGVBQWUsR0FBRyxlQUFlLEdBQUcsdUJBQXVCLENBQUM7WUFDOUQsQ0FBQztZQUVELGVBQWUsR0FBRyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBR3pDLGVBQWUsR0FBRyxlQUFlLEdBQUcscUJBQXFCLEdBQUcsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFFMUYsZUFBZSxHQUFHLGVBQWUsR0FBRyx3QkFBd0IsR0FBRyxVQUFVLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUUvRixFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ3JDLGVBQWUsR0FBRyxlQUFlLEdBQUcsdUJBQXVCLEdBQUcsVUFBVSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDbkcsQ0FBQztZQUVELE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDekIsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUVELG9EQUFtQixHQUFuQixVQUFvQixNQUFVO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFoRUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUN6QixDQUFDOzs4QkFBQTtJQThERiw2QkFBQztBQUFELENBNURBLEFBNERDLElBQUE7QUE1RFksOEJBQXNCLHlCQTREbEMsQ0FBQSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL21pY3Jvc2VydmljZXMvbWljcm9zZXJ2aWNlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXN0LnNlcnZpY2UnO1xuaW1wb3J0IHtEYXRhUGFzc2luZ1NlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kYXRhcGFzc2luZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdtaWNyb3NlcnZpY2VzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21pY3Jvc2VydmljZXMuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtSZXN0U2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNaWNyb3NlcnZpY2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gIGRlY29tcG9zaXRpb25zIDogQXJyYXk8T2JqZWN0PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Jlc3QgOiBSZXN0U2VydmljZSwgcHJpdmF0ZSBfZGF0YXBhc3NpbmdTZXJ2aWNlOiBEYXRhUGFzc2luZ1NlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKXtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLl9yZXN0Lmxpc3REZWNvbXBvc2l0aW9ucygpLnN1YnNjcmliZShcbiAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRlY29tcG9zaXRpb25zID0gSlNPTi5wYXJzZShyZXN1bHQuX2JvZHkpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAvL2FsZXJ0KGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICApO1xuXG4gIH1cblxuICBwYXJhbWV0ZXJTdHJpbmcocGFyYW1ldGVyczphbnkpOiBzdHJpbmcge1xuXG4gICAgaWYocGFyYW1ldGVycyAhPT0gbnVsbCl7XG4gICAgICBsZXQgcGFyYW1ldGVyU3RyaW5nID0gXCJTdHJhdGVnaWVzOiBbIFwiO1xuXG4gICAgICBpZihwYXJhbWV0ZXJzLmxvZ2ljYWxDb3VwbGluZyA9PSB0cnVlKXtcbiAgICAgICAgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyU3RyaW5nICsgXCIgTG9naWNhbENvdXBsaW5nIFwiO1xuICAgICAgfVxuXG4gICAgICBpZihwYXJhbWV0ZXJzLnNlbWFudGljQ291cGxpbmcgPT0gdHJ1ZSl7XG4gICAgICAgIHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlclN0cmluZyArIFwiIFNlbWFudGljQ291cGxpbmcgXCI7XG4gICAgICB9XG5cbiAgICAgIGlmKHBhcmFtZXRlcnMuY29udHJpYnV0b3JDb3VwbGluZyA9PSB0cnVlKXtcbiAgICAgICAgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyU3RyaW5nICsgXCIgQ29udHJpYnV0b3JDb3VwbGluZyBcIjtcbiAgICAgIH1cblxuICAgICAgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyU3RyaW5nICsgXCIgXVwiO1xuXG5cbiAgICAgIHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlclN0cmluZyArIFwiLCBudW1QYXJ0aXRpb25zOiBbIFwiICsgcGFyYW1ldGVycy5udW1TZXJ2aWNlcyArIFwiIF1cIjtcblxuICAgICAgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyU3RyaW5nICsgXCIsIG1heENvbXBvbmVudFNpemU6IFsgXCIgKyBwYXJhbWV0ZXJzLnNpemVUaHJlc2hvbGQgKyBcIiBdXCI7XG5cbiAgICAgIGlmKHBhcmFtZXRlcnMubG9naWNhbENvdXBsaW5nID09IHRydWUpe1xuICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXJTdHJpbmcgKyBcIiwgaGlzdG9yeUludGVydmFsOiBbIFwiICsgcGFyYW1ldGVycy5pbnRlcnZhbFNlY29uZHMgKyBcInMgXVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyYW1ldGVyU3RyaW5nO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIFwiTm8gUGFyYW1ldGVyc1wiO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdERlY29tcG9zaXRpb24oZGVjb21wOmFueSk6IHZvaWQge1xuICAgIHRoaXMuX2RhdGFwYXNzaW5nU2VydmljZS5zZXRSZXBvc2l0b3J5KGRlY29tcC5yZXBvKTtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZ3JhcGgnLCBkZWNvbXAuZGVjb21wb3NpdGlvbklkXSk7XG4gIH1cblxuXG59XG4iXX0=
