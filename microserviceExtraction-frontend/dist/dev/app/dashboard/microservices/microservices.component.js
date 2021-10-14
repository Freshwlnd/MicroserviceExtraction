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
            _this.decompositions = JSON.parse(result["_body"]);
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
            if (parameters.dynamicCoupling == true) {
                parameterString = parameterString + " DynamicCoupling ";
            }
            parameterString = parameterString + " ]";
            parameterString = parameterString + ", numPartitions: [ " + parameters.numServices + " ]";
            parameterString = parameterString + ", maxComponentSize: [ " + parameters.sizeThreshold + " ]";
            if (parameters.logicalCoupling == true) {
                parameterString = parameterString + ", historyInterval: [ " + parameters.intervalSeconds + "s ]";
            }
            parameterString = parameterString + ", Method: [";
            if (parameters.usePRBME == true) {
                parameterString = parameterString + " usePRBME ";
            }
            if (parameters.useMEM == true) {
                parameterString = parameterString + " useMEM ";
            }
            parameterString = parameterString + " ]";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvbWljcm9zZXJ2aWNlcy9taWNyb3NlcnZpY2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELDZCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzFELG9DQUFpQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBQ3RFLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBU3pDO0lBSUUsZ0NBQW9CLEtBQW1CLEVBQVUsbUJBQXVDLEVBQVUsT0FBZTtRQUE3RixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGakgsbUJBQWMsR0FBbUIsRUFBRSxDQUFDO0lBSXBDLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUMsU0FBUyxDQUNyQyxVQUFBLE1BQU07WUFDRixLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsTUFBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0QsQ0FBQyxFQUNELFVBQUEsS0FBSztRQUVMLENBQUMsQ0FDSixDQUFDO0lBRU4sQ0FBQztJQUVELGdEQUFlLEdBQWYsVUFBZ0IsVUFBYztRQUU1QixFQUFFLENBQUEsQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUEsQ0FBQztZQUN0QixJQUFJLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQztZQUV2QyxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ3JDLGVBQWUsR0FBRyxlQUFlLEdBQUcsbUJBQW1CLENBQUM7WUFDMUQsQ0FBQztZQUVELEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUN0QyxlQUFlLEdBQUcsZUFBZSxHQUFHLG9CQUFvQixDQUFDO1lBQzNELENBQUM7WUFFRCxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDekMsZUFBZSxHQUFHLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQztZQUM5RCxDQUFDO1lBRUQsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNyQyxlQUFlLEdBQUcsZUFBZSxHQUFHLG1CQUFtQixDQUFDO1lBQzFELENBQUM7WUFFRCxlQUFlLEdBQUcsZUFBZSxHQUFHLElBQUksQ0FBQztZQUd6QyxlQUFlLEdBQUcsZUFBZSxHQUFHLHFCQUFxQixHQUFHLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBRTFGLGVBQWUsR0FBRyxlQUFlLEdBQUcsd0JBQXdCLEdBQUcsVUFBVSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFFL0YsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNyQyxlQUFlLEdBQUcsZUFBZSxHQUFHLHVCQUF1QixHQUFHLFVBQVUsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQ25HLENBQUM7WUFFRCxlQUFlLEdBQUcsZUFBZSxHQUFHLGFBQWEsQ0FBQTtZQUVqRCxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQzlCLGVBQWUsR0FBRyxlQUFlLEdBQUcsWUFBWSxDQUFDO1lBQ25ELENBQUM7WUFFRCxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQzVCLGVBQWUsR0FBRyxlQUFlLEdBQUcsVUFBVSxDQUFDO1lBQ2pELENBQUM7WUFFRCxlQUFlLEdBQUcsZUFBZSxHQUFHLElBQUksQ0FBQztZQUV6QyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQ3pCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFFRCxvREFBbUIsR0FBbkIsVUFBb0IsTUFBVTtRQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBaEZIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FDekIsQ0FBQzs7OEJBQUE7SUE4RUYsNkJBQUM7QUFBRCxDQTVFQSxBQTRFQyxJQUFBO0FBNUVZLDhCQUFzQix5QkE0RWxDLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9taWNyb3NlcnZpY2VzL21pY3Jvc2VydmljZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVzdC5zZXJ2aWNlJztcbmltcG9ydCB7RGF0YVBhc3NpbmdTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGF0YXBhc3Npbmcuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbWljcm9zZXJ2aWNlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9taWNyb3NlcnZpY2VzLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbUmVzdFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgTWljcm9zZXJ2aWNlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICBkZWNvbXBvc2l0aW9ucyA6IEFycmF5PE9iamVjdD4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZXN0IDogUmVzdFNlcnZpY2UsIHByaXZhdGUgX2RhdGFwYXNzaW5nU2VydmljZTogRGF0YVBhc3NpbmdTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcil7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5fcmVzdC5saXN0RGVjb21wb3NpdGlvbnMoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kZWNvbXBvc2l0aW9ucyA9IEpTT04ucGFyc2UoKHJlc3VsdCBhcyBhbnkpW1wiX2JvZHlcIl0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAvL2FsZXJ0KGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICApO1xuXG4gIH1cblxuICBwYXJhbWV0ZXJTdHJpbmcocGFyYW1ldGVyczphbnkpOiBzdHJpbmcge1xuXG4gICAgaWYocGFyYW1ldGVycyAhPT0gbnVsbCl7XG4gICAgICBsZXQgcGFyYW1ldGVyU3RyaW5nID0gXCJTdHJhdGVnaWVzOiBbIFwiO1xuXG4gICAgICBpZihwYXJhbWV0ZXJzLmxvZ2ljYWxDb3VwbGluZyA9PSB0cnVlKXtcbiAgICAgICAgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyU3RyaW5nICsgXCIgTG9naWNhbENvdXBsaW5nIFwiO1xuICAgICAgfVxuXG4gICAgICBpZihwYXJhbWV0ZXJzLnNlbWFudGljQ291cGxpbmcgPT0gdHJ1ZSl7XG4gICAgICAgIHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlclN0cmluZyArIFwiIFNlbWFudGljQ291cGxpbmcgXCI7XG4gICAgICB9XG5cbiAgICAgIGlmKHBhcmFtZXRlcnMuY29udHJpYnV0b3JDb3VwbGluZyA9PSB0cnVlKXtcbiAgICAgICAgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyU3RyaW5nICsgXCIgQ29udHJpYnV0b3JDb3VwbGluZyBcIjtcbiAgICAgIH1cblxuICAgICAgaWYocGFyYW1ldGVycy5keW5hbWljQ291cGxpbmcgPT0gdHJ1ZSl7XG4gICAgICAgIHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlclN0cmluZyArIFwiIER5bmFtaWNDb3VwbGluZyBcIjtcbiAgICAgIH1cblxuICAgICAgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyU3RyaW5nICsgXCIgXVwiO1xuXG5cbiAgICAgIHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlclN0cmluZyArIFwiLCBudW1QYXJ0aXRpb25zOiBbIFwiICsgcGFyYW1ldGVycy5udW1TZXJ2aWNlcyArIFwiIF1cIjtcblxuICAgICAgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyU3RyaW5nICsgXCIsIG1heENvbXBvbmVudFNpemU6IFsgXCIgKyBwYXJhbWV0ZXJzLnNpemVUaHJlc2hvbGQgKyBcIiBdXCI7XG5cbiAgICAgIGlmKHBhcmFtZXRlcnMubG9naWNhbENvdXBsaW5nID09IHRydWUpe1xuICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXJTdHJpbmcgKyBcIiwgaGlzdG9yeUludGVydmFsOiBbIFwiICsgcGFyYW1ldGVycy5pbnRlcnZhbFNlY29uZHMgKyBcInMgXVwiO1xuICAgICAgfVxuXG4gICAgICBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXJTdHJpbmcgKyBcIiwgTWV0aG9kOiBbXCJcblxuICAgICAgaWYocGFyYW1ldGVycy51c2VQUkJNRSA9PSB0cnVlKXtcbiAgICAgICAgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyU3RyaW5nICsgXCIgdXNlUFJCTUUgXCI7XG4gICAgICB9XG5cbiAgICAgIGlmKHBhcmFtZXRlcnMudXNlTUVNID09IHRydWUpe1xuICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXJTdHJpbmcgKyBcIiB1c2VNRU0gXCI7XG4gICAgICB9XG5cbiAgICAgIHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlclN0cmluZyArIFwiIF1cIjtcblxuICAgICAgcmV0dXJuIHBhcmFtZXRlclN0cmluZztcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBcIk5vIFBhcmFtZXRlcnNcIjtcbiAgICB9XG4gIH1cblxuICBzZWxlY3REZWNvbXBvc2l0aW9uKGRlY29tcDphbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9kYXRhcGFzc2luZ1NlcnZpY2Uuc2V0UmVwb3NpdG9yeShkZWNvbXAucmVwbyk7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2dyYXBoJywgZGVjb21wLmRlY29tcG9zaXRpb25JZF0pO1xuICB9XG5cblxufVxuIl19
