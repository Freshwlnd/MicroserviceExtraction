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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var config_service_1 = require('./config.service');
var RestService = (function () {
    function RestService(http, configs) {
        this.http = http;
        this.configs = configs;
    }
    RestService.prototype.getRepository = function (id) {
        return this.http.get(this.configs.apiUrl + '/repositories/' + id, this.requestOptions());
    };
    RestService.prototype.cloneRepository = function (uri) {
        var repoObject = { uri: uri };
        return this.http.post(this.configs.apiUrl + '/repositories', JSON.stringify(repoObject), this.requestOptions());
    };
    RestService.prototype.listRepositories = function () {
        return this.http.get(this.configs.apiUrl + '/repositories', this.requestOptions());
    };
    RestService.prototype.getDecomposition = function (decompositionId) {
        return this.http.get(this.configs.apiUrl + '/microservices/' + decompositionId, this.requestOptions());
    };
    RestService.prototype.listDecompositions = function () {
        return this.http.get(this.configs.apiUrl + '/microservices', this.requestOptions());
    };
    RestService.prototype.decompose = function (id, dto) {
        var uri = this.configs.apiUrl + '/repositories/' + id + '/decomposition';
        return this.http.post(uri, JSON.stringify(dto), this.requestOptions());
    };
    RestService.prototype.requestOptions = function () {
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return new http_2.RequestOptions({
            headers: headers,
        });
    };
    RestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_service_1.ConfigService])
    ], RestService);
    return RestService;
}());
exports.RestService = RestService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9yZXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFFN0MscUJBQXNDLGVBQWUsQ0FBQyxDQUFBO0FBRXRELCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBSS9DO0lBRUkscUJBQXNCLElBQVUsRUFDVixPQUFzQjtRQUR0QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsWUFBTyxHQUFQLE9BQU8sQ0FBZTtJQUM1QyxDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLEVBQVU7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLGdCQUFnQixHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQscUNBQWUsR0FBZixVQUFnQixHQUFXO1FBQ3ZCLElBQUksVUFBVSxHQUFHLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUNuSCxDQUFDO0lBRUQsc0NBQWdCLEdBQWhCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQsc0NBQWdCLEdBQWhCLFVBQWlCLGVBQXVCO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsR0FBRyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDekcsQ0FBQztJQUVELHdDQUFrQixHQUFsQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLEVBQVUsRUFBRSxHQUFxQjtRQUN6QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsR0FBRyxFQUFFLEdBQUcsZ0JBQWdCLENBQUM7UUFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxvQ0FBYyxHQUFkO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFN0MsTUFBTSxDQUFDLElBQUkscUJBQWMsQ0FBQztZQUN0QixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBekNMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUE0Q2Isa0JBQUM7QUFBRCxDQTNDQSxBQTJDQyxJQUFBO0FBM0NZLG1CQUFXLGNBMkN2QixDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9yZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHtSZXF1ZXN0T3B0aW9ucywgSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7Q29uZmlnU2VydmljZX0gZnJvbSAnLi9jb25maWcuc2VydmljZSc7XG5pbXBvcnQge0RlY29tcG9zaXRpb25EVE99IGZyb20gXCIuLi9tb2RlbHMvZGVjb21wb3NpdGlvbi5kdG9cIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlc3RTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwOiBIdHRwLFxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBjb25maWdzOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgZ2V0UmVwb3NpdG9yeShpZDogTnVtYmVyKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWdzLmFwaVVybCArICcvcmVwb3NpdG9yaWVzLycgKyBpZCwgdGhpcy5yZXF1ZXN0T3B0aW9ucygpKTtcbiAgICB9XG5cbiAgICBjbG9uZVJlcG9zaXRvcnkodXJpOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIGxldCByZXBvT2JqZWN0ID0ge3VyaTogdXJpfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuY29uZmlncy5hcGlVcmwgKyAnL3JlcG9zaXRvcmllcycsIEpTT04uc3RyaW5naWZ5KHJlcG9PYmplY3QpLHRoaXMucmVxdWVzdE9wdGlvbnMoKSk7XG4gICAgfVxuXG4gICAgbGlzdFJlcG9zaXRvcmllcygpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlncy5hcGlVcmwgKyAnL3JlcG9zaXRvcmllcycsIHRoaXMucmVxdWVzdE9wdGlvbnMoKSk7XG4gICAgfVxuXG4gICAgZ2V0RGVjb21wb3NpdGlvbihkZWNvbXBvc2l0aW9uSWQ6IG51bWJlcik6IE9ic2VydmFibGU8UmVzcG9uc2U+e1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWdzLmFwaVVybCArICcvbWljcm9zZXJ2aWNlcy8nICsgZGVjb21wb3NpdGlvbklkLCB0aGlzLnJlcXVlc3RPcHRpb25zKCkpO1xuICAgIH1cblxuICAgIGxpc3REZWNvbXBvc2l0aW9ucygpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmNvbmZpZ3MuYXBpVXJsICsgJy9taWNyb3NlcnZpY2VzJywgdGhpcy5yZXF1ZXN0T3B0aW9ucygpKTtcbiAgICB9XG5cbiAgICBkZWNvbXBvc2UoaWQ6IG51bWJlciwgZHRvOiBEZWNvbXBvc2l0aW9uRFRPKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgdmFyIHVyaSA9IHRoaXMuY29uZmlncy5hcGlVcmwgKyAnL3JlcG9zaXRvcmllcy8nICsgaWQgKyAnL2RlY29tcG9zaXRpb24nO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVyaSwgSlNPTi5zdHJpbmdpZnkoZHRvKSwgdGhpcy5yZXF1ZXN0T3B0aW9ucygpKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0T3B0aW9ucygpOlJlcXVlc3RPcHRpb25zIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxufVxuXG4iXX0=
