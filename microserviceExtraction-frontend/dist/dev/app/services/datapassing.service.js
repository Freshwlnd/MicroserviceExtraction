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
var DataPassingService = (function () {
    function DataPassingService() {
    }
    DataPassingService.prototype.setRepository = function (repo) {
        this.repository = repo;
    };
    DataPassingService.prototype.getRepository = function () {
        return this.repository;
    };
    DataPassingService.prototype.setDecomposition = function (d) {
        this.decomposition = d;
    };
    DataPassingService.prototype.getDecomposition = function () {
        return this.decomposition;
    };
    DataPassingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataPassingService);
    return DataPassingService;
}());
exports.DataPassingService = DataPassingService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9kYXRhcGFzc2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFJekM7SUFPRTtJQUFlLENBQUM7SUFFaEIsMENBQWEsR0FBYixVQUFjLElBQWdCO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwwQ0FBYSxHQUFiO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELDZDQUFnQixHQUFoQixVQUFpQixDQUFNO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBeEJIO1FBQUMsaUJBQVUsRUFBRTs7MEJBQUE7SUE0QmIseUJBQUM7QUFBRCxDQTNCQSxBQTJCQyxJQUFBO0FBM0JZLDBCQUFrQixxQkEyQjlCLENBQUEiLCJmaWxlIjoiYXBwL3NlcnZpY2VzL2RhdGFwYXNzaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgZ21hemxhbWkgb24gMS8xNS8xNy5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZXBvc2l0b3J5fSBmcm9tICcuLi9tb2RlbHMvcmVwb3NpdG9yeS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhUGFzc2luZ1NlcnZpY2Uge1xuXG4gIHJlcG9zaXRvcnk6IFJlcG9zaXRvcnk7XG5cbiAgZGVjb21wb3NpdGlvbjogYW55O1xuXG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNldFJlcG9zaXRvcnkocmVwbzogUmVwb3NpdG9yeSk6IHZvaWQge1xuICAgIHRoaXMucmVwb3NpdG9yeSA9IHJlcG87XG4gIH1cblxuICBnZXRSZXBvc2l0b3J5KCk6IFJlcG9zaXRvcnkge1xuICAgIHJldHVybiB0aGlzLnJlcG9zaXRvcnk7XG4gIH1cblxuICBzZXREZWNvbXBvc2l0aW9uKGQ6IGFueSl7XG4gICAgdGhpcy5kZWNvbXBvc2l0aW9uID0gZDtcbiAgfVxuXG4gIGdldERlY29tcG9zaXRpb24oKXtcbiAgICByZXR1cm4gdGhpcy5kZWNvbXBvc2l0aW9uO1xuICB9XG5cblxuXG59XG5cbiJdfQ==
