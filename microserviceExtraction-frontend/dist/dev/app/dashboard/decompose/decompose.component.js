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
        this.numServices = 7;
        this.intervalSeconds = 3600;
        this.sizeThreshold = 400;
        this.useMethod = "PRBME";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGVjb21wb3NlL2RlY29tcG9zZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCw2QkFBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUUxRCxrQ0FBaUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUNsRSx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCxvQ0FBbUMsb0NBQW9DLENBQUMsQ0FBQTtBQUN4RSx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQWV6QztJQXVCRSw0QkFBb0IsS0FBbUIsRUFBVSxNQUFzQixFQUFVLG1CQUF1QyxFQUFVLE9BQWU7UUFBN0gsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFuQmpKLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBUWhDLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLG9CQUFlLEdBQVcsSUFBSSxDQUFDO1FBRS9CLGtCQUFhLEdBQVcsR0FBRyxDQUFDO1FBSTVCLGNBQVMsR0FBVyxPQUFPLENBQUE7SUFLM0IsQ0FBQztJQUdELHFDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWJDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDakMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNwQyxVQUFBLE1BQU07Z0JBRUosS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLE1BQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM5QixDQUFDLEVBQ0QsVUFBQSxLQUFLO2dCQUNILEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0NBQVMsR0FBVDtRQUFBLGlCQTRCQztRQTNCQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTVCLElBQUksR0FBRyxHQUFHLElBQUksb0NBQWdCLEVBQUUsQ0FBQztRQUNqQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDM0MsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN2QyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEUsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNwRSxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQzFFLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsRSxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7UUFDeEQsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBRXBELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FDckQsVUFBQSxNQUFNO1lBRUosSUFBSSxRQUFRLEdBQUksTUFBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxLQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FDRixDQUFDO0lBRUosQ0FBQztJQWpGSDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbEIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FFekIsQ0FBQzs7MEJBQUE7SUFpRkYseUJBQUM7QUFBRCxDQS9FQSxBQStFQyxJQUFBO0FBL0VZLDBCQUFrQixxQkErRTlCLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9kZWNvbXBvc2UvZGVjb21wb3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Jlc3Quc2VydmljZSc7XG5pbXBvcnQgeyBSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3JlcG9zaXRvcnkubW9kZWwnO1xuaW1wb3J0IHsgRGVjb21wb3NpdGlvbkRUTyB9IGZyb20gJy4uLy4uL21vZGVscy9kZWNvbXBvc2l0aW9uLmR0byc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEYXRhUGFzc2luZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGF0YXBhc3Npbmcuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuXG5kZWNsYXJlIHZhciB2aXM6IGFueTtcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdkZWNvbXBvc2UtcmVwbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZWNvbXBvc2UuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtSZXN0U2VydmljZV1cblxufSlcblxuZXhwb3J0IGNsYXNzIERlY29tcG9zZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICByZXBvc2l0b3J5OiBSZXBvc2l0b3J5O1xuXG4gIGxvZ2ljYWxDb3VwbGluZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgc2VtYW50aWNDb3VwbGluZzogYm9vbGVhbjtcblxuICBjb250cmlidXRvckNvdXBsaW5nOiBib29sZWFuO1xuXG4gIGR5bmFtaWNDb3VwbGluZzogYm9vbGVhbjtcblxuICBudW1TZXJ2aWNlczogTnVtYmVyID0gNztcblxuICBpbnRlcnZhbFNlY29uZHM6IE51bWJlciA9IDM2MDA7XG5cbiAgc2l6ZVRocmVzaG9sZDogTnVtYmVyID0gNDAwO1xuXG4gIGlzRGF0YUF2YWlsYWJsZTogYm9vbGVhbjtcblxuICB1c2VNZXRob2Q6IFN0cmluZyA9IFwiUFJCTUVcIlxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVzdCA6IFJlc3RTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2RhdGFwYXNzaW5nU2VydmljZTogRGF0YVBhc3NpbmdTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcil7XG5cbiAgfVxuXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICBsZXQgaWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgdGhpcy5fcmVzdC5nZXRSZXBvc2l0b3J5KGlkKS5zdWJzY3JpYmUoXG4gICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5yZXBvc2l0b3J5ID0gSlNPTi5wYXJzZShyZXN1bHQuX2JvZHkpO1xuICAgICAgICAgIHRoaXMucmVwb3NpdG9yeSA9IEpTT04ucGFyc2UoKHJlc3VsdCBhcyBhbnkpW1wiX2JvZHlcIl0pO1xuICAgICAgICAgIHRoaXMuaXNEYXRhQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlY29tcG9zZSgpOiB2b2lkIHtcbiAgICAkKCcjbXlNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG5cbiAgICB2YXIgZHRvID0gbmV3IERlY29tcG9zaXRpb25EVE8oKTtcbiAgICBkdG8uaW50ZXJ2YWxTZWNvbmRzID0gdGhpcy5pbnRlcnZhbFNlY29uZHM7XG4gICAgZHRvLm51bVNlcnZpY2VzID0gdGhpcy5udW1TZXJ2aWNlcztcbiAgICBkdG8uc2l6ZVRocmVzaG9sZCA9IHRoaXMuc2l6ZVRocmVzaG9sZDtcbiAgICBkdG8ubG9naWNhbENvdXBsaW5nID0gdGhpcy5sb2dpY2FsQ291cGxpbmcgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZTtcbiAgICBkdG8uc2VtYW50aWNDb3VwbGluZyA9IHRoaXMuc2VtYW50aWNDb3VwbGluZyA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGR0by5jb250cmlidXRvckNvdXBsaW5nID0gdGhpcy5jb250cmlidXRvckNvdXBsaW5nID09IHRydWUgPyB0cnVlIDogZmFsc2U7XG4gICAgZHRvLmR5bmFtaWNDb3VwbGluZyA9IHRoaXMuZHluYW1pY0NvdXBsaW5nID09IHRydWUgPyB0cnVlIDogZmFsc2U7XG4gICAgZHRvLnVzZVBSQk1FID0gdGhpcy51c2VNZXRob2QgPT0gXCJQUkJNRVwiID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGR0by51c2VNRU0gPSB0aGlzLnVzZU1ldGhvZCA9PSBcIk1FTVwiID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgdGhpcy5fcmVzdC5kZWNvbXBvc2UodGhpcy5yZXBvc2l0b3J5LmlkLCBkdG8pLnN1YnNjcmliZShcbiAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgIC8vIHZhciByZXNwb25zZSA9IHJlc3VsdC5fYm9keTtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gKHJlc3VsdCBhcyBhbnkpW1wiX2JvZHlcIl07XG4gICAgICAgIHRoaXMuX2RhdGFwYXNzaW5nU2VydmljZS5zZXREZWNvbXBvc2l0aW9uKHJlc3BvbnNlKTtcbiAgICAgICAgdGhpcy5fZGF0YXBhc3NpbmdTZXJ2aWNlLnNldFJlcG9zaXRvcnkodGhpcy5yZXBvc2l0b3J5KTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy9ncmFwaCcpO1xuICAgICAgICAkKCcjbXlNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICB9LFxuICAgICAgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgKTtcblxuICB9XG5cblxuXG5cblxufVxuIl19
