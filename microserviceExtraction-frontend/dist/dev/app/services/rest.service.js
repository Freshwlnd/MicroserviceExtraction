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
    RestService.prototype.makeRequests = function (requestNum) {
        return this.http.get(this.configs.apiUrl + '/experiment/makeRequests/' + requestNum, this.requestOptions());
    };
    RestService.prototype.doPRBME = function () {
        return this.http.get(this.configs.apiUrl + '/experiment/doPRBME', this.requestOptions());
    };
    RestService.prototype.doMEM = function () {
        return this.http.get(this.configs.apiUrl + '/experiment/doMEM', this.requestOptions());
    };
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9yZXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFFN0MscUJBQXNDLGVBQWUsQ0FBQyxDQUFBO0FBRXRELCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBSS9DO0lBRUkscUJBQXNCLElBQVUsRUFDVixPQUFzQjtRQUR0QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsWUFBTyxHQUFQLE9BQU8sQ0FBZTtJQUM1QyxDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLFVBQWtCO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRywyQkFBMkIsR0FBRyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDaEgsQ0FBQztJQUVELDZCQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcscUJBQXFCLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELG1DQUFhLEdBQWIsVUFBYyxFQUFVO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELHFDQUFlLEdBQWYsVUFBZ0IsR0FBVztRQUN2QixJQUFJLFVBQVUsR0FBRyxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDbkgsQ0FBQztJQUVELHNDQUFnQixHQUFoQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELHNDQUFnQixHQUFoQixVQUFpQixlQUF1QjtRQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLEdBQUcsZUFBZSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFFRCx3Q0FBa0IsR0FBbEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELCtCQUFTLEdBQVQsVUFBVSxFQUFVLEVBQUUsR0FBcUI7UUFDekMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEdBQUcsRUFBRSxHQUFHLGdCQUFnQixDQUFDO1FBQ3pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRTdDLE1BQU0sQ0FBQyxJQUFJLHFCQUFjLENBQUM7WUFDdEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXJETDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBd0RiLGtCQUFDO0FBQUQsQ0F2REEsQUF1REMsSUFBQTtBQXZEWSxtQkFBVyxjQXVEdkIsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvcmVzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7UmVxdWVzdE9wdGlvbnMsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQge0NvbmZpZ1NlcnZpY2V9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHtEZWNvbXBvc2l0aW9uRFRPfSBmcm9tIFwiLi4vbW9kZWxzL2RlY29tcG9zaXRpb24uZHRvXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXN0U2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cDogSHR0cCxcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgY29uZmlnczogQ29uZmlnU2VydmljZSkge1xuICAgIH1cblxuICAgIG1ha2VSZXF1ZXN0cyhyZXF1ZXN0TnVtOiBOdW1iZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlncy5hcGlVcmwgKyAnL2V4cGVyaW1lbnQvbWFrZVJlcXVlc3RzLycgKyByZXF1ZXN0TnVtLCB0aGlzLnJlcXVlc3RPcHRpb25zKCkpO1xuICAgIH1cbiAgICBcbiAgICBkb1BSQk1FKCk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWdzLmFwaVVybCArICcvZXhwZXJpbWVudC9kb1BSQk1FJywgdGhpcy5yZXF1ZXN0T3B0aW9ucygpKTtcbiAgICB9XG5cbiAgICBkb01FTSgpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlncy5hcGlVcmwgKyAnL2V4cGVyaW1lbnQvZG9NRU0nLCB0aGlzLnJlcXVlc3RPcHRpb25zKCkpO1xuICAgIH1cblxuICAgIGdldFJlcG9zaXRvcnkoaWQ6IE51bWJlcik6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlncy5hcGlVcmwgKyAnL3JlcG9zaXRvcmllcy8nICsgaWQsIHRoaXMucmVxdWVzdE9wdGlvbnMoKSk7XG4gICAgfVxuXG4gICAgY2xvbmVSZXBvc2l0b3J5KHVyaTogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICBsZXQgcmVwb09iamVjdCA9IHt1cmk6IHVyaX07XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmNvbmZpZ3MuYXBpVXJsICsgJy9yZXBvc2l0b3JpZXMnLCBKU09OLnN0cmluZ2lmeShyZXBvT2JqZWN0KSx0aGlzLnJlcXVlc3RPcHRpb25zKCkpO1xuICAgIH1cblxuICAgIGxpc3RSZXBvc2l0b3JpZXMoKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmNvbmZpZ3MuYXBpVXJsICsgJy9yZXBvc2l0b3JpZXMnLCB0aGlzLnJlcXVlc3RPcHRpb25zKCkpO1xuICAgIH1cblxuICAgIGdldERlY29tcG9zaXRpb24oZGVjb21wb3NpdGlvbklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPntcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlncy5hcGlVcmwgKyAnL21pY3Jvc2VydmljZXMvJyArIGRlY29tcG9zaXRpb25JZCwgdGhpcy5yZXF1ZXN0T3B0aW9ucygpKTtcbiAgICB9XG5cbiAgICBsaXN0RGVjb21wb3NpdGlvbnMoKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWdzLmFwaVVybCArICcvbWljcm9zZXJ2aWNlcycsIHRoaXMucmVxdWVzdE9wdGlvbnMoKSk7XG4gICAgfVxuXG4gICAgZGVjb21wb3NlKGlkOiBudW1iZXIsIGR0bzogRGVjb21wb3NpdGlvbkRUTyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgIHZhciB1cmkgPSB0aGlzLmNvbmZpZ3MuYXBpVXJsICsgJy9yZXBvc2l0b3JpZXMvJyArIGlkICsgJy9kZWNvbXBvc2l0aW9uJztcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmksIEpTT04uc3RyaW5naWZ5KGR0byksIHRoaXMucmVxdWVzdE9wdGlvbnMoKSk7XG4gICAgfVxuXG4gICAgcmVxdWVzdE9wdGlvbnMoKTpSZXF1ZXN0T3B0aW9ucyB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn1cblxuIl19
