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
            if (parameters.dynamicCoupling == true) {
                parameterString = parameterString + " DynamicCoupling ";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvbWljcm9zZXJ2aWNlcy9taWNyb3NlcnZpY2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELDZCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzFELG9DQUFpQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBQ3RFLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBU3pDO0lBSUUsZ0NBQW9CLEtBQW1CLEVBQVUsbUJBQXVDLEVBQVUsT0FBZTtRQUE3RixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGakgsbUJBQWMsR0FBbUIsRUFBRSxDQUFDO0lBSXBDLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUMsU0FBUyxDQUNyQyxVQUFBLE1BQU07WUFDRixLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25ELENBQUMsRUFDRCxVQUFBLEtBQUs7UUFFTCxDQUFDLENBQ0osQ0FBQztJQUVOLENBQUM7SUFFRCxnREFBZSxHQUFmLFVBQWdCLFVBQWM7UUFFNUIsRUFBRSxDQUFBLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDdEIsSUFBSSxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7WUFFdkMsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNyQyxlQUFlLEdBQUcsZUFBZSxHQUFHLG1CQUFtQixDQUFDO1lBQzFELENBQUM7WUFFRCxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDdEMsZUFBZSxHQUFHLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQztZQUMzRCxDQUFDO1lBRUQsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLG1CQUFtQixJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ3pDLGVBQWUsR0FBRyxlQUFlLEdBQUcsdUJBQXVCLENBQUM7WUFDOUQsQ0FBQztZQUVELEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDckMsZUFBZSxHQUFHLGVBQWUsR0FBRyxtQkFBbUIsQ0FBQztZQUMxRCxDQUFDO1lBRUQsZUFBZSxHQUFHLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFHekMsZUFBZSxHQUFHLGVBQWUsR0FBRyxxQkFBcUIsR0FBRyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUUxRixlQUFlLEdBQUcsZUFBZSxHQUFHLHdCQUF3QixHQUFHLFVBQVUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBRS9GLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDckMsZUFBZSxHQUFHLGVBQWUsR0FBRyx1QkFBdUIsR0FBRyxVQUFVLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUNuRyxDQUFDO1lBRUQsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUN6QixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixNQUFNLENBQUMsZUFBZSxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBRUQsb0RBQW1CLEdBQW5CLFVBQW9CLE1BQVU7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQXBFSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1NBQ3pCLENBQUM7OzhCQUFBO0lBa0VGLDZCQUFDO0FBQUQsQ0FoRUEsQUFnRUMsSUFBQTtBQWhFWSw4QkFBc0IseUJBZ0VsQyxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvbWljcm9zZXJ2aWNlcy9taWNyb3NlcnZpY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Jlc3Quc2VydmljZSc7XG5pbXBvcnQge0RhdGFQYXNzaW5nU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RhdGFwYXNzaW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ21pY3Jvc2VydmljZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWljcm9zZXJ2aWNlcy5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1Jlc3RTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIE1pY3Jvc2VydmljZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgZGVjb21wb3NpdGlvbnMgOiBBcnJheTxPYmplY3Q+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVzdCA6IFJlc3RTZXJ2aWNlLCBwcml2YXRlIF9kYXRhcGFzc2luZ1NlcnZpY2U6IERhdGFQYXNzaW5nU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpe1xuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuX3Jlc3QubGlzdERlY29tcG9zaXRpb25zKCkuc3Vic2NyaWJlKFxuICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGVjb21wb3NpdGlvbnMgPSBKU09OLnBhcnNlKHJlc3VsdC5fYm9keSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIC8vYWxlcnQoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICk7XG5cbiAgfVxuXG4gIHBhcmFtZXRlclN0cmluZyhwYXJhbWV0ZXJzOmFueSk6IHN0cmluZyB7XG5cbiAgICBpZihwYXJhbWV0ZXJzICE9PSBudWxsKXtcbiAgICAgIGxldCBwYXJhbWV0ZXJTdHJpbmcgPSBcIlN0cmF0ZWdpZXM6IFsgXCI7XG5cbiAgICAgIGlmKHBhcmFtZXRlcnMubG9naWNhbENvdXBsaW5nID09IHRydWUpe1xuICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXJTdHJpbmcgKyBcIiBMb2dpY2FsQ291cGxpbmcgXCI7XG4gICAgICB9XG5cbiAgICAgIGlmKHBhcmFtZXRlcnMuc2VtYW50aWNDb3VwbGluZyA9PSB0cnVlKXtcbiAgICAgICAgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyU3RyaW5nICsgXCIgU2VtYW50aWNDb3VwbGluZyBcIjtcbiAgICAgIH1cblxuICAgICAgaWYocGFyYW1ldGVycy5jb250cmlidXRvckNvdXBsaW5nID09IHRydWUpe1xuICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXJTdHJpbmcgKyBcIiBDb250cmlidXRvckNvdXBsaW5nIFwiO1xuICAgICAgfVxuXG4gICAgICBpZihwYXJhbWV0ZXJzLmR5bmFtaWNDb3VwbGluZyA9PSB0cnVlKXtcbiAgICAgICAgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyU3RyaW5nICsgXCIgRHluYW1pY0NvdXBsaW5nIFwiO1xuICAgICAgfVxuXG4gICAgICBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXJTdHJpbmcgKyBcIiBdXCI7XG5cblxuICAgICAgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyU3RyaW5nICsgXCIsIG51bVBhcnRpdGlvbnM6IFsgXCIgKyBwYXJhbWV0ZXJzLm51bVNlcnZpY2VzICsgXCIgXVwiO1xuXG4gICAgICBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXJTdHJpbmcgKyBcIiwgbWF4Q29tcG9uZW50U2l6ZTogWyBcIiArIHBhcmFtZXRlcnMuc2l6ZVRocmVzaG9sZCArIFwiIF1cIjtcblxuICAgICAgaWYocGFyYW1ldGVycy5sb2dpY2FsQ291cGxpbmcgPT0gdHJ1ZSl7XG4gICAgICAgIHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlclN0cmluZyArIFwiLCBoaXN0b3J5SW50ZXJ2YWw6IFsgXCIgKyBwYXJhbWV0ZXJzLmludGVydmFsU2Vjb25kcyArIFwicyBdXCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJhbWV0ZXJTdHJpbmc7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJObyBQYXJhbWV0ZXJzXCI7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0RGVjb21wb3NpdGlvbihkZWNvbXA6YW55KTogdm9pZCB7XG4gICAgdGhpcy5fZGF0YXBhc3NpbmdTZXJ2aWNlLnNldFJlcG9zaXRvcnkoZGVjb21wLnJlcG8pO1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9ncmFwaCcsIGRlY29tcC5kZWNvbXBvc2l0aW9uSWRdKTtcbiAgfVxuXG5cbn1cbiJdfQ==
