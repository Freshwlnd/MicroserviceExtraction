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
        this.numServices = 4;
        this.intervalSeconds = 3600;
        this.sizeThreshold = 10;
    }
    DecomposeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this._rest.getRepository(id).subscribe(function (result) {
                _this.repository = JSON.parse(result._body);
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
        this._rest.decompose(this.repository.id, dto).subscribe(function (result) {
            var response = result._body;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGVjb21wb3NlL2RlY29tcG9zZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCw2QkFBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUUxRCxrQ0FBaUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUNsRSx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCxvQ0FBbUMsb0NBQW9DLENBQUMsQ0FBQTtBQUN4RSx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQWV6QztJQXFCRSw0QkFBb0IsS0FBbUIsRUFBVSxNQUFzQixFQUFVLG1CQUF1QyxFQUFVLE9BQWU7UUFBN0gsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFqQmpKLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBUWhDLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLG9CQUFlLEdBQVcsSUFBSSxDQUFDO1FBRS9CLGtCQUFhLEdBQVcsRUFBRSxDQUFDO0lBTzNCLENBQUM7SUFHRCxxQ0FBUSxHQUFSO1FBQUEsaUJBY0M7UUFaQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2pDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDcEMsVUFBQSxNQUFNO2dCQUNKLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQzlCLENBQUMsRUFDRCxVQUFBLEtBQUs7Z0JBQ0gsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQUEsaUJBeUJDO1FBeEJDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFNUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxvQ0FBZ0IsRUFBRSxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUMzQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbkMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsRSxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3BFLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7UUFDMUUsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBRWxFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FDckQsVUFBQSxNQUFNO1lBQ0osSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUM1QixLQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQ0YsQ0FBQztJQUVKLENBQUM7SUEzRUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1NBRXpCLENBQUM7OzBCQUFBO0lBMkVGLHlCQUFDO0FBQUQsQ0F6RUEsQUF5RUMsSUFBQTtBQXpFWSwwQkFBa0IscUJBeUU5QixDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZGVjb21wb3NlL2RlY29tcG9zZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL21vZGVscy9yZXBvc2l0b3J5Lm1vZGVsJztcbmltcG9ydCB7IERlY29tcG9zaXRpb25EVE8gfSBmcm9tICcuLi8uLi9tb2RlbHMvZGVjb21wb3NpdGlvbi5kdG8nO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGF0YVBhc3NpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RhdGFwYXNzaW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cblxuZGVjbGFyZSB2YXIgdmlzOiBhbnk7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZGVjb21wb3NlLXJlcG8nLFxuICB0ZW1wbGF0ZVVybDogJy4vZGVjb21wb3NlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbUmVzdFNlcnZpY2VdXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBEZWNvbXBvc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgcmVwb3NpdG9yeTogUmVwb3NpdG9yeTtcblxuICBsb2dpY2FsQ291cGxpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHNlbWFudGljQ291cGxpbmc6IGJvb2xlYW47XG5cbiAgY29udHJpYnV0b3JDb3VwbGluZzogYm9vbGVhbjtcblxuICBkeW5hbWljQ291cGxpbmc6IGJvb2xlYW47XG5cbiAgbnVtU2VydmljZXM6IE51bWJlciA9IDQ7XG5cbiAgaW50ZXJ2YWxTZWNvbmRzOiBOdW1iZXIgPSAzNjAwO1xuXG4gIHNpemVUaHJlc2hvbGQ6IE51bWJlciA9IDEwO1xuXG4gIGlzRGF0YUF2YWlsYWJsZTogYm9vbGVhbjtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Jlc3QgOiBSZXN0U2VydmljZSwgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9kYXRhcGFzc2luZ1NlcnZpY2U6IERhdGFQYXNzaW5nU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpe1xuXG4gIH1cblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgbGV0IGlkID0gK3BhcmFtc1snaWQnXTtcbiAgICAgIHRoaXMuX3Jlc3QuZ2V0UmVwb3NpdG9yeShpZCkuc3Vic2NyaWJlKFxuICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoaXMucmVwb3NpdG9yeSA9IEpTT04ucGFyc2UocmVzdWx0Ll9ib2R5KTtcbiAgICAgICAgICB0aGlzLmlzRGF0YUF2YWlsYWJsZSA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBkZWNvbXBvc2UoKTogdm9pZCB7XG4gICAgJCgnI215TW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuXG4gICAgdmFyIGR0byA9IG5ldyBEZWNvbXBvc2l0aW9uRFRPKCk7XG4gICAgZHRvLmludGVydmFsU2Vjb25kcyA9IHRoaXMuaW50ZXJ2YWxTZWNvbmRzO1xuICAgIGR0by5udW1TZXJ2aWNlcyA9IHRoaXMubnVtU2VydmljZXM7XG4gICAgZHRvLnNpemVUaHJlc2hvbGQgPSB0aGlzLnNpemVUaHJlc2hvbGQ7XG4gICAgZHRvLmxvZ2ljYWxDb3VwbGluZyA9IHRoaXMubG9naWNhbENvdXBsaW5nID09IHRydWUgPyB0cnVlIDogZmFsc2U7XG4gICAgZHRvLnNlbWFudGljQ291cGxpbmcgPSB0aGlzLnNlbWFudGljQ291cGxpbmcgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZTtcbiAgICBkdG8uY29udHJpYnV0b3JDb3VwbGluZyA9IHRoaXMuY29udHJpYnV0b3JDb3VwbGluZyA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGR0by5keW5hbWljQ291cGxpbmcgPSB0aGlzLmR5bmFtaWNDb3VwbGluZyA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgdGhpcy5fcmVzdC5kZWNvbXBvc2UodGhpcy5yZXBvc2l0b3J5LmlkLCBkdG8pLnN1YnNjcmliZShcbiAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgIHZhciByZXNwb25zZSA9IHJlc3VsdC5fYm9keTtcbiAgICAgICAgdGhpcy5fZGF0YXBhc3NpbmdTZXJ2aWNlLnNldERlY29tcG9zaXRpb24ocmVzcG9uc2UpO1xuICAgICAgICB0aGlzLl9kYXRhcGFzc2luZ1NlcnZpY2Uuc2V0UmVwb3NpdG9yeSh0aGlzLnJlcG9zaXRvcnkpO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2dyYXBoJyk7XG4gICAgICAgICQoJyNteU1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICApO1xuXG4gIH1cblxuXG5cblxuXG59XG4iXX0=
