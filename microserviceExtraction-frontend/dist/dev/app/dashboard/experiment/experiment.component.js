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
var ExperimentComponent = (function () {
    function ExperimentComponent(_rest) {
        this._rest = _rest;
        this.requestNum = 100;
        this.PRBMEtime = -1;
        this.MEMtime = -1;
    }
    ExperimentComponent.prototype.ngOnInit = function () {
    };
    ExperimentComponent.prototype.makeRequests = function () {
        $('#makeModal').modal('show');
        console.log("makeRequests");
        this._rest.makeRequests(this.requestNum).subscribe(function (result) {
            $('#makeModal').modal('hide');
        }, function (error) {
            alert("There was an error during making.");
            $('#makeModal').modal('hide');
        });
        console.log("Sent request");
    };
    ExperimentComponent.prototype.doPRBME = function () {
        var _this = this;
        $('#myModal').modal('show');
        console.log("do PRBME");
        this._rest.doPRBME().subscribe(function (result) {
            _this.PRBMEtime = (JSON.parse(result._body));
            $('#myModal').modal('hide');
        }, function (error) {
            alert("There was an error during making.");
            $('#myModal').modal('hide');
        });
        console.log("Sent request");
    };
    ExperimentComponent.prototype.doMEM = function () {
        var _this = this;
        $('#myModal').modal('show');
        console.log("do MEM");
        this._rest.doMEM().subscribe(function (result) {
            _this.MEMtime = (JSON.parse(result._body));
            $('#myModal').modal('hide');
        }, function (error) {
            alert("There was an error during making.");
            $('#myModal').modal('hide');
        });
        console.log("Sent request");
    };
    ExperimentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'experiment-repo',
            templateUrl: './experiment.component.html',
            providers: [rest_service_1.RestService]
        }), 
        __metadata('design:paramtypes', [rest_service_1.RestService])
    ], ExperimentComponent);
    return ExperimentComponent;
}());
exports.ExperimentComponent = ExperimentComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZXhwZXJpbWVudC9leHBlcmltZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELDZCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBVTFEO0lBUUUsNkJBQW9CLEtBQW1CO1FBQW5CLFVBQUssR0FBTCxLQUFLLENBQWM7UUFOdkMsZUFBVSxHQUFXLEdBQUcsQ0FBQztRQUV6QixjQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUE7UUFFdEIsWUFBTyxHQUFXLENBQUMsQ0FBQyxDQUFBO0lBSXBCLENBQUM7SUFFRCxzQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELDBDQUFZLEdBQVo7UUFDRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FDOUMsVUFBQSxNQUFNO1lBQ0osQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7WUFDM0MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQ0osQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHFDQUFPLEdBQVA7UUFBQSxpQkFjQztRQWJDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FDMUIsVUFBQSxNQUFNO1lBQ0osS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7WUFDM0MsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQ0osQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELG1DQUFLLEdBQUw7UUFBQSxpQkFjQztRQWJDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FDeEIsVUFBQSxNQUFNO1lBQ0osS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7WUFDM0MsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQ0osQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQXBFSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FDekIsQ0FBQzs7MkJBQUE7SUFnRUYsMEJBQUM7QUFBRCxDQTlEQSxBQThEQyxJQUFBO0FBOURZLDJCQUFtQixzQkE4RC9CLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9leHBlcmltZW50L2V4cGVyaW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVzdC5zZXJ2aWNlJztcbmltcG9ydCB7IFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVwb3NpdG9yeS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2V4cGVyaW1lbnQtcmVwbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBlcmltZW50LmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbUmVzdFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgRXhwZXJpbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICByZXF1ZXN0TnVtOiBOdW1iZXIgPSAxMDA7XG5cbiAgUFJCTUV0aW1lOiBOdW1iZXIgPSAtMVxuXG4gIE1FTXRpbWU6IE51bWJlciA9IC0xXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVzdCA6IFJlc3RTZXJ2aWNlKXtcblxuICB9XG4gIFxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICB9XG5cbiAgbWFrZVJlcXVlc3RzKCk6IHZvaWQge1xuICAgICQoJyNtYWtlTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgIGNvbnNvbGUubG9nKFwibWFrZVJlcXVlc3RzXCIpO1xuICAgIHRoaXMuX3Jlc3QubWFrZVJlcXVlc3RzKHRoaXMucmVxdWVzdE51bSkuc3Vic2NyaWJlKFxuICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICQoJyNtYWtlTW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgYWxlcnQoXCJUaGVyZSB3YXMgYW4gZXJyb3IgZHVyaW5nIG1ha2luZy5cIik7XG4gICAgICAgICAgJCgnI21ha2VNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFwiU2VudCByZXF1ZXN0XCIpO1xuICB9XG5cbiAgZG9QUkJNRSgpOiB2b2lkIHtcbiAgICAkKCcjbXlNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgY29uc29sZS5sb2coXCJkbyBQUkJNRVwiKTtcbiAgICB0aGlzLl9yZXN0LmRvUFJCTUUoKS5zdWJzY3JpYmUoXG4gICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgdGhpcy5QUkJNRXRpbWUgPSAoSlNPTi5wYXJzZShyZXN1bHQuX2JvZHkpKTtcbiAgICAgICAgICAkKCcjbXlNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICBhbGVydChcIlRoZXJlIHdhcyBhbiBlcnJvciBkdXJpbmcgbWFraW5nLlwiKTtcbiAgICAgICAgICAkKCcjbXlNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFwiU2VudCByZXF1ZXN0XCIpO1xuICB9XG5cbiAgZG9NRU0oKTogdm9pZCB7XG4gICAgJCgnI215TW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgIGNvbnNvbGUubG9nKFwiZG8gTUVNXCIpO1xuICAgIHRoaXMuX3Jlc3QuZG9NRU0oKS5zdWJzY3JpYmUoXG4gICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgdGhpcy5NRU10aW1lID0gKEpTT04ucGFyc2UocmVzdWx0Ll9ib2R5KSk7XG4gICAgICAgICAgJCgnI215TW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgYWxlcnQoXCJUaGVyZSB3YXMgYW4gZXJyb3IgZHVyaW5nIG1ha2luZy5cIik7XG4gICAgICAgICAgJCgnI215TW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICB9XG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhcIlNlbnQgcmVxdWVzdFwiKTtcbiAgfVxufVxuIl19
