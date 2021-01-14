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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGVjb21wb3NlL2RlY29tcG9zZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCw2QkFBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUUxRCxrQ0FBaUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUNsRSx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCxvQ0FBbUMsb0NBQW9DLENBQUMsQ0FBQTtBQUN4RSx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQWV6QztJQW1CRSw0QkFBb0IsS0FBbUIsRUFBVSxNQUFzQixFQUFVLG1CQUF1QyxFQUFVLE9BQWU7UUFBN0gsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFmakosb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFNaEMsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsb0JBQWUsR0FBVyxJQUFJLENBQUM7UUFFL0Isa0JBQWEsR0FBVyxFQUFFLENBQUM7SUFPM0IsQ0FBQztJQUdELHFDQUFRLEdBQVI7UUFBQSxpQkFjQztRQVpDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDakMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNwQyxVQUFBLE1BQU07Z0JBQ0osS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0MsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDOUIsQ0FBQyxFQUNELFVBQUEsS0FBSztnQkFDSCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDZixDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFBQSxpQkF3QkM7UUF2QkMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU1QixJQUFJLEdBQUcsR0FBRyxJQUFJLG9DQUFnQixFQUFFLENBQUM7UUFDakMsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNuQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdkMsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xFLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7UUFDcEUsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUUxRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQ3JELFVBQUEsTUFBTTtZQUNKLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDNUIsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUNGLENBQUM7SUFFSixDQUFDO0lBeEVIO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNsQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUV6QixDQUFDOzswQkFBQTtJQXdFRix5QkFBQztBQUFELENBdEVBLEFBc0VDLElBQUE7QUF0RVksMEJBQWtCLHFCQXNFOUIsQ0FBQSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2RlY29tcG9zZS9kZWNvbXBvc2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVzdC5zZXJ2aWNlJztcbmltcG9ydCB7IFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVwb3NpdG9yeS5tb2RlbCc7XG5pbXBvcnQgeyBEZWNvbXBvc2l0aW9uRFRPIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RlY29tcG9zaXRpb24uZHRvJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERhdGFQYXNzaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kYXRhcGFzc2luZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5cbmRlY2xhcmUgdmFyIHZpczogYW55O1xuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2RlY29tcG9zZS1yZXBvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlY29tcG9zZS5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1Jlc3RTZXJ2aWNlXVxuXG59KVxuXG5leHBvcnQgY2xhc3MgRGVjb21wb3NlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gIHJlcG9zaXRvcnk6IFJlcG9zaXRvcnk7XG5cbiAgbG9naWNhbENvdXBsaW5nOiBib29sZWFuID0gdHJ1ZTtcblxuICBzZW1hbnRpY0NvdXBsaW5nOiBib29sZWFuO1xuXG4gIGNvbnRyaWJ1dG9yQ291cGxpbmc6IGJvb2xlYW47XG5cbiAgbnVtU2VydmljZXM6IE51bWJlciA9IDQ7XG5cbiAgaW50ZXJ2YWxTZWNvbmRzOiBOdW1iZXIgPSAzNjAwO1xuXG4gIHNpemVUaHJlc2hvbGQ6IE51bWJlciA9IDEwO1xuXG4gIGlzRGF0YUF2YWlsYWJsZTogYm9vbGVhbjtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Jlc3QgOiBSZXN0U2VydmljZSwgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9kYXRhcGFzc2luZ1NlcnZpY2U6IERhdGFQYXNzaW5nU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpe1xuXG4gIH1cblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgbGV0IGlkID0gK3BhcmFtc1snaWQnXTtcbiAgICAgIHRoaXMuX3Jlc3QuZ2V0UmVwb3NpdG9yeShpZCkuc3Vic2NyaWJlKFxuICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoaXMucmVwb3NpdG9yeSA9IEpTT04ucGFyc2UocmVzdWx0Ll9ib2R5KTtcbiAgICAgICAgICB0aGlzLmlzRGF0YUF2YWlsYWJsZSA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBkZWNvbXBvc2UoKTogdm9pZCB7XG4gICAgJCgnI215TW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuXG4gICAgdmFyIGR0byA9IG5ldyBEZWNvbXBvc2l0aW9uRFRPKCk7XG4gICAgZHRvLmludGVydmFsU2Vjb25kcyA9IHRoaXMuaW50ZXJ2YWxTZWNvbmRzO1xuICAgIGR0by5udW1TZXJ2aWNlcyA9IHRoaXMubnVtU2VydmljZXM7XG4gICAgZHRvLnNpemVUaHJlc2hvbGQgPSB0aGlzLnNpemVUaHJlc2hvbGQ7XG4gICAgZHRvLmxvZ2ljYWxDb3VwbGluZyA9IHRoaXMubG9naWNhbENvdXBsaW5nID09IHRydWUgPyB0cnVlIDogZmFsc2U7XG4gICAgZHRvLnNlbWFudGljQ291cGxpbmcgPSB0aGlzLnNlbWFudGljQ291cGxpbmcgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZTtcbiAgICBkdG8uY29udHJpYnV0b3JDb3VwbGluZyA9IHRoaXMuY29udHJpYnV0b3JDb3VwbGluZyA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgdGhpcy5fcmVzdC5kZWNvbXBvc2UodGhpcy5yZXBvc2l0b3J5LmlkLCBkdG8pLnN1YnNjcmliZShcbiAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgIHZhciByZXNwb25zZSA9IHJlc3VsdC5fYm9keTtcbiAgICAgICAgdGhpcy5fZGF0YXBhc3NpbmdTZXJ2aWNlLnNldERlY29tcG9zaXRpb24ocmVzcG9uc2UpO1xuICAgICAgICB0aGlzLl9kYXRhcGFzc2luZ1NlcnZpY2Uuc2V0UmVwb3NpdG9yeSh0aGlzLnJlcG9zaXRvcnkpO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2dyYXBoJyk7XG4gICAgICAgICQoJyNteU1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICApO1xuXG4gIH1cblxuXG5cblxuXG59XG4iXX0=
