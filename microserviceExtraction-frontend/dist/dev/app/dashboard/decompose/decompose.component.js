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
var decomposition_dto_1 = require('../../models/decomposition.dto');
var router_1 = require('@angular/router');
var datapassing_service_1 = require("../../services/datapassing.service");
var router_2 = require('@angular/router');
var DecomposeComponent = (function () {
    function DecomposeComponent(_rest, _route, _datapassingService, _router) {
        this._rest = _rest;
        this._route = _route;
        this._datapassingService = _datapassingService;
        this._router = _router;
        this.logicalCoupling = true;
        this.numServices = 14;
        this.intervalSeconds = 3600;
        this.sizeThreshold = 400;
        this.useMethod = "MEM";
    }
    DecomposeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this._rest.getRepository(id).subscribe(function (result) {
                _this.repository = JSON.parse(result["_body"]);
                _this.isDataAvailable = true;
            }, function (error) {
                alert(error);
            });
        });
    };
    DecomposeComponent.prototype.decompose = function () {
        var _this = this;
        $('#myModal').modal('show');
        var dto = new decomposition_dto_1.DecompositionDTO();
        dto.intervalSeconds = this.intervalSeconds;
        dto.numServices = this.numServices;
        dto.sizeThreshold = this.sizeThreshold;
        dto.logicalCoupling = this.logicalCoupling == true ? true : false;
        dto.semanticCoupling = this.semanticCoupling == true ? true : false;
        dto.contributorCoupling = this.contributorCoupling == true ? true : false;
        dto.dynamicCoupling = this.dynamicCoupling == true ? true : false;
        dto.usePRBME = this.useMethod == "PRBME" ? true : false;
        dto.useMEM = this.useMethod == "MEM" ? true : false;
        this._rest.decompose(this.repository.id, dto).subscribe(function (result) {
            var response = result["_body"];
            _this._datapassingService.setDecomposition(response);
            _this._datapassingService.setRepository(_this.repository);
            _this._router.navigateByUrl('/graph');
            $('#myModal').modal('hide');
        }, function (error) {
            console.log(error);
        });
    };
    DecomposeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'decompose-repo',
            templateUrl: './decompose.component.html',
            providers: [rest_service_1.RestService]
        }), 
        __metadata('design:paramtypes', [rest_service_1.RestService, router_1.ActivatedRoute, datapassing_service_1.DataPassingService, router_2.Router])
    ], DecomposeComponent);
    return DecomposeComponent;
}());
exports.DecomposeComponent = DecomposeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGVjb21wb3NlL2RlY29tcG9zZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCw2QkFBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUUxRCxrQ0FBaUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUNsRSx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCxvQ0FBbUMsb0NBQW9DLENBQUMsQ0FBQTtBQUN4RSx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQWV6QztJQXVCRSw0QkFBb0IsS0FBbUIsRUFBVSxNQUFzQixFQUFVLG1CQUF1QyxFQUFVLE9BQWU7UUFBN0gsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFuQmpKLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBUWhDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXpCLG9CQUFlLEdBQVcsSUFBSSxDQUFDO1FBRS9CLGtCQUFhLEdBQVcsR0FBRyxDQUFDO1FBSTVCLGNBQVMsR0FBVyxLQUFLLENBQUE7SUFLekIsQ0FBQztJQUdELHFDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWJDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDakMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNwQyxVQUFBLE1BQU07Z0JBRUosS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLE1BQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM5QixDQUFDLEVBQ0QsVUFBQSxLQUFLO2dCQUNILEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0NBQVMsR0FBVDtRQUFBLGlCQTRCQztRQTNCQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTVCLElBQUksR0FBRyxHQUFHLElBQUksb0NBQWdCLEVBQUUsQ0FBQztRQUNqQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDM0MsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN2QyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEUsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNwRSxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQzFFLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsRSxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7UUFDeEQsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBRXBELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FDckQsVUFBQSxNQUFNO1lBRUosSUFBSSxRQUFRLEdBQUksTUFBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxLQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FDRixDQUFDO0lBRUosQ0FBQztJQWpGSDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbEIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FFekIsQ0FBQzs7MEJBQUE7SUFpRkYseUJBQUM7QUFBRCxDQS9FQSxBQStFQyxJQUFBO0FBL0VZLDBCQUFrQixxQkErRTlCLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9kZWNvbXBvc2UvZGVjb21wb3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Jlc3Quc2VydmljZSc7XG5pbXBvcnQgeyBSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3JlcG9zaXRvcnkubW9kZWwnO1xuaW1wb3J0IHsgRGVjb21wb3NpdGlvbkRUTyB9IGZyb20gJy4uLy4uL21vZGVscy9kZWNvbXBvc2l0aW9uLmR0byc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEYXRhUGFzc2luZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGF0YXBhc3Npbmcuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuXG5kZWNsYXJlIHZhciB2aXM6IGFueTtcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdkZWNvbXBvc2UtcmVwbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZWNvbXBvc2UuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtSZXN0U2VydmljZV1cblxufSlcblxuZXhwb3J0IGNsYXNzIERlY29tcG9zZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICByZXBvc2l0b3J5OiBSZXBvc2l0b3J5O1xuXG4gIGxvZ2ljYWxDb3VwbGluZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgc2VtYW50aWNDb3VwbGluZzogYm9vbGVhbjtcblxuICBjb250cmlidXRvckNvdXBsaW5nOiBib29sZWFuO1xuXG4gIGR5bmFtaWNDb3VwbGluZzogYm9vbGVhbjtcblxuICBudW1TZXJ2aWNlczogTnVtYmVyID0gMTQ7XG5cbiAgaW50ZXJ2YWxTZWNvbmRzOiBOdW1iZXIgPSAzNjAwO1xuXG4gIHNpemVUaHJlc2hvbGQ6IE51bWJlciA9IDQwMDtcblxuICBpc0RhdGFBdmFpbGFibGU6IGJvb2xlYW47XG5cbiAgdXNlTWV0aG9kOiBTdHJpbmcgPSBcIk1FTVwiXG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZXN0IDogUmVzdFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfZGF0YXBhc3NpbmdTZXJ2aWNlOiBEYXRhUGFzc2luZ1NlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKXtcblxuICB9XG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIGxldCBpZCA9ICtwYXJhbXNbJ2lkJ107XG4gICAgICB0aGlzLl9yZXN0LmdldFJlcG9zaXRvcnkoaWQpLnN1YnNjcmliZShcbiAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICAvLyB0aGlzLnJlcG9zaXRvcnkgPSBKU09OLnBhcnNlKHJlc3VsdC5fYm9keSk7XG4gICAgICAgICAgdGhpcy5yZXBvc2l0b3J5ID0gSlNPTi5wYXJzZSgocmVzdWx0IGFzIGFueSlbXCJfYm9keVwiXSk7XG4gICAgICAgICAgdGhpcy5pc0RhdGFBdmFpbGFibGUgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgZGVjb21wb3NlKCk6IHZvaWQge1xuICAgICQoJyNteU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcblxuICAgIHZhciBkdG8gPSBuZXcgRGVjb21wb3NpdGlvbkRUTygpO1xuICAgIGR0by5pbnRlcnZhbFNlY29uZHMgPSB0aGlzLmludGVydmFsU2Vjb25kcztcbiAgICBkdG8ubnVtU2VydmljZXMgPSB0aGlzLm51bVNlcnZpY2VzO1xuICAgIGR0by5zaXplVGhyZXNob2xkID0gdGhpcy5zaXplVGhyZXNob2xkO1xuICAgIGR0by5sb2dpY2FsQ291cGxpbmcgPSB0aGlzLmxvZ2ljYWxDb3VwbGluZyA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGR0by5zZW1hbnRpY0NvdXBsaW5nID0gdGhpcy5zZW1hbnRpY0NvdXBsaW5nID09IHRydWUgPyB0cnVlIDogZmFsc2U7XG4gICAgZHRvLmNvbnRyaWJ1dG9yQ291cGxpbmcgPSB0aGlzLmNvbnRyaWJ1dG9yQ291cGxpbmcgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZTtcbiAgICBkdG8uZHluYW1pY0NvdXBsaW5nID0gdGhpcy5keW5hbWljQ291cGxpbmcgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZTtcbiAgICBkdG8udXNlUFJCTUUgPSB0aGlzLnVzZU1ldGhvZCA9PSBcIlBSQk1FXCIgPyB0cnVlIDogZmFsc2U7XG4gICAgZHRvLnVzZU1FTSA9IHRoaXMudXNlTWV0aG9kID09IFwiTUVNXCIgPyB0cnVlIDogZmFsc2U7XG5cbiAgICB0aGlzLl9yZXN0LmRlY29tcG9zZSh0aGlzLnJlcG9zaXRvcnkuaWQsIGR0bykuc3Vic2NyaWJlKFxuICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgLy8gdmFyIHJlc3BvbnNlID0gcmVzdWx0Ll9ib2R5O1xuICAgICAgICB2YXIgcmVzcG9uc2UgPSAocmVzdWx0IGFzIGFueSlbXCJfYm9keVwiXTtcbiAgICAgICAgdGhpcy5fZGF0YXBhc3NpbmdTZXJ2aWNlLnNldERlY29tcG9zaXRpb24ocmVzcG9uc2UpO1xuICAgICAgICB0aGlzLl9kYXRhcGFzc2luZ1NlcnZpY2Uuc2V0UmVwb3NpdG9yeSh0aGlzLnJlcG9zaXRvcnkpO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2dyYXBoJyk7XG4gICAgICAgICQoJyNteU1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICApO1xuXG4gIH1cblxuXG5cblxuXG59XG4iXX0=
