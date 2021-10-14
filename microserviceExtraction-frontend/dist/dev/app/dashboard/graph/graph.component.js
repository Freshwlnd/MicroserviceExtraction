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
var router_1 = require('@angular/router');
var datapassing_service_1 = require("../../services/datapassing.service");
var GraphComponent = (function () {
    function GraphComponent(_rest, _route, _datapassingService) {
        this._rest = _rest;
        this._route = _route;
        this._datapassingService = _datapassingService;
    }
    GraphComponent.prototype.createNetwork = function () {
        this.isDataAvailable = true;
        var options = {
            physics: {
                forceAtlas2Based: {
                    gravitationalConstant: -1000,
                    springLength: 50,
                    centralGravity: 0,
                    springConstant: 0.9,
                    avoidOverlap: 1,
                    damping: 0
                }
            }
        };
        var microservices = JSON.parse(this.decomposition);
        var componentIds = [];
        var nodeList = [];
        var edgeList = [];
        for (var i = 0; i < microservices.length; i++) {
            componentIds.push(microservices[i].componentId);
            for (var k = 0; k < microservices[i].nodes.length; k++) {
                var node = microservices[i].nodes[k];
                node.componentId = microservices[i].componentId;
                nodeList.push(node);
            }
            for (var k = 0; k < microservices[i].edges.length; k++) {
                console.log(microservices[i].edges[k]);
                edgeList.push(microservices[i].edges[k]);
            }
        }
        var data = {
            nodes: new vis.DataSet(nodeList),
            edges: new vis.DataSet(edgeList)
        };
        var initiated = false;
        var network = new vis.Network(this.networkDiv.nativeElement, data, options);
        network.on("afterDrawing", function (params) {
            if (initiated == false) {
                for (var i = 0; i < componentIds.length; i++) {
                    var options = {
                        joinCondition: function (nodeOptions) {
                            if (nodeOptions.componentId == componentIds[i]) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                    };
                    network.cluster(options);
                }
                initiated = true;
            }
        });
        network.on("selectNode", function (params) {
            var selectedNodeId = params.nodes[0];
            network.openCluster(selectedNodeId, {});
        });
    };
    GraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route
            .params
            .subscribe(function (params) {
            if (params['id']) {
                _this.repository = _this._datapassingService.getRepository();
                _this._rest.getDecomposition(params['id']).subscribe(function (response) {
                    _this.decomposition = response["_body"];
                    _this.createNetwork();
                });
            }
            else {
                _this.repository = _this._datapassingService.getRepository();
                _this.decomposition = _this._datapassingService.getDecomposition();
                _this.createNetwork();
            }
        });
    };
    __decorate([
        core_1.ViewChild('mynetwork'), 
        __metadata('design:type', Object)
    ], GraphComponent.prototype, "networkDiv", void 0);
    GraphComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'graph-view',
            templateUrl: './graph.component.html',
            providers: [rest_service_1.RestService]
        }), 
        __metadata('design:paramtypes', [rest_service_1.RestService, router_1.ActivatedRoute, datapassing_service_1.DataPassingService])
    ], GraphComponent);
    return GraphComponent;
}());
exports.GraphComponent = GraphComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZ3JhcGgvZ3JhcGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsNkJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFFMUQsdUJBQStCLGlCQUFpQixDQUFDLENBQUE7QUFDakQsb0NBQW1DLG9DQUFvQyxDQUFDLENBQUE7QUFleEU7SUFVRSx3QkFBb0IsS0FBbUIsRUFBVSxNQUFzQixFQUFVLG1CQUF1QztRQUFwRyxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO0lBRXhILENBQUM7SUFHRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFNUIsSUFBSSxPQUFPLEdBQUc7WUFDWixPQUFPLEVBQUU7Z0JBRVAsZ0JBQWdCLEVBQUM7b0JBQ2YscUJBQXFCLEVBQUUsQ0FBQyxJQUFJO29CQUM1QixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsY0FBYyxFQUFFLENBQUM7b0JBQ2pCLGNBQWMsRUFBRSxHQUFHO29CQUVuQixZQUFZLEVBQUUsQ0FBQztvQkFDZixPQUFPLEVBQUUsQ0FBQztpQkFDWDthQUNGO1NBQ0YsQ0FBQztRQUVGLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRW5ELElBQUksWUFBWSxHQUFTLEVBQUUsQ0FBQztRQUU1QixJQUFJLFFBQVEsR0FBUyxFQUFFLENBQUM7UUFFeEIsSUFBSSxRQUFRLEdBQVMsRUFBRSxDQUFDO1FBRXhCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQzFDLFlBQVksQ0FBQyxJQUFJLENBQUMs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LFVBQVUsR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtvQkFDMUQsS0FBSSxDQUFDLGFBQWEsR0FBSSxRQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoRCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUVKLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMzRCxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUNqRSxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdkIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXpHRDtRQUFDLGdCQUFTLENBQUMsV0FBVyxDQUFDOztzREFBQTtJQWhCekI7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUV6QixDQUFDOztzQkFBQTtJQW9IRixxQkFBQztBQUFELENBbEhBLEFBa0hDLElBQUE7QUFsSFksc0JBQWMsaUJBa0gxQixDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZ3JhcGgvZ3JhcGguY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL21vZGVscy9yZXBvc2l0b3J5Lm1vZGVsJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERhdGFQYXNzaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kYXRhcGFzc2luZy5zZXJ2aWNlXCI7XG5cblxuXG5kZWNsYXJlIHZhciB2aXM6IGFueTtcblxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdncmFwaC12aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dyYXBoLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbUmVzdFNlcnZpY2VdXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBHcmFwaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICByZXBvc2l0b3J5OiBSZXBvc2l0b3J5O1xuXG4gIGRlY29tcG9zaXRpb246IGFueTtcblxuICBpc0RhdGFBdmFpbGFibGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgnbXluZXR3b3JrJykgbmV0d29ya0Rpdjphbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVzdCA6IFJlc3RTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2RhdGFwYXNzaW5nU2VydmljZTogRGF0YVBhc3NpbmdTZXJ2aWNlKXtcblxuICB9XG5cblxuICBjcmVhdGVOZXR3b3JrKCk6IHZvaWQge1xuICAgIHRoaXMuaXNEYXRhQXZhaWxhYmxlID0gdHJ1ZTtcblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgcGh5c2ljczoge1xuXG4gICAgICAgIGZvcmNlQXRsYXMyQmFzZWQ6e1xuICAgICAgICAgIGdyYXZpdGF0aW9uYWxDb25zdGFudDogLTEwMDAsXG4gICAgICAgICAgc3ByaW5nTGVuZ3RoOiA1MCxcbiAgICAgICAgICBjZW50cmFsR3Jhdml0eTogMCxcbiAgICAgICAgICBzcHJpbmdDb25zdGFudDogMC45LFxuICAgICAgICAgIC8vIHNwcmluZ0xlbmd0aDogMjAsXG4gICAgICAgICAgYXZvaWRPdmVybGFwOiAxLFxuICAgICAgICAgIGRhbXBpbmc6IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgbWljcm9zZXJ2aWNlcyA9IEpTT04ucGFyc2UodGhpcy5kZWNvbXBvc2l0aW9uKTtcblxuICAgIHZhciBjb21wb25lbnRJZHM6YW55W10gPSBbXTtcblxuICAgIHZhciBub2RlTGlzdDphbnlbXSA9IFtdO1xuXG4gICAgdmFyIGVkZ2VMaXN0OmFueVtdID0gW107XG5cbiAgICBmb3IodmFyIGk9MDsgaSA8IG1pY3Jvc2VydmljZXMubGVuZ3RoOyBpKyspe1xuICAgICAgY29tcG9uZW50SWRzLnB1c2gobWljcm9zZXJ2aWNlc1tpXS5jb21wb25lbnRJZCk7XG5cbiAgICAgIGZvcih2YXIgaz0wOyBrIDwgbWljcm9zZXJ2aWNlc1tpXS5ub2Rlcy5sZW5ndGg7IGsrKyl7XG4gICAgICAgIHZhciBub2RlID0gbWljcm9zZXJ2aWNlc1tpXS5ub2Rlc1trXTtcbiAgICAgICAgbm9kZS5jb21wb25lbnRJZCA9IG1pY3Jvc2VydmljZXNbaV0uY29tcG9uZW50SWQ7XG4gICAgICAgIG5vZGVMaXN0LnB1c2gobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGZvcih2YXIgaz0wOyBrIDwgbWljcm9zZXJ2aWNlc1tpXS5lZGdlcy5sZW5ndGg7IGsrKyl7XG4gICAgICAgIGNvbnNvbGUubG9nKG1pY3Jvc2VydmljZXNbaV0uZWRnZXNba10pO1xuICAgICAgICBlZGdlTGlzdC5wdXNoKG1pY3Jvc2VydmljZXNbaV0uZWRnZXNba10pO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gcHJvdmlkZSB0aGUgZGF0YSBpbiB0aGUgdmlzIGZvcm1hdFxuICAgIHZhciBkYXRhID0ge1xuICAgICAgbm9kZXM6IG5ldyB2aXMuRGF0YVNldChub2RlTGlzdCksXG4gICAgICBlZGdlczogbmV3IHZpcy5EYXRhU2V0KGVkZ2VMaXN0KVxuICAgIH07XG5cbiAgICB2YXIgaW5pdGlhdGVkID0gZmFsc2U7XG5cbiAgICB2YXIgbmV0d29yayA9IG5ldyB2aXMuTmV0d29yayh0aGlzLm5ldHdvcmtEaXYubmF0aXZlRWxlbWVudCwgZGF0YSwgb3B0aW9ucyk7XG5cbiAgICAvLyBmb3JtIGNsdXN0ZXJzIGFmdGVyIGRyYXdpbmcgdGhlIG5vZGVzXG4gICAgbmV0d29yay5vbihcImFmdGVyRHJhd2luZ1wiLCBmdW5jdGlvbiAocGFyYW1zOmFueSkge1xuICAgICAgaWYoaW5pdGlhdGVkPT1mYWxzZSl7XG5cbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNvbXBvbmVudElkcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBqb2luQ29uZGl0aW9uOiBmdW5jdGlvbihub2RlT3B0aW9uczphbnkpe1xuXG4gICAgICAgICAgICAgIGlmKG5vZGVPcHRpb25zLmNvbXBvbmVudElkID09IGNvbXBvbmVudElkc1tpXSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgbmV0d29yay5jbHVzdGVyKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGluaXRpYXRlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICB9KTtcblxuICAgIG5ldHdvcmsub24oXCJzZWxlY3ROb2RlXCIsIGZ1bmN0aW9uIChwYXJhbXM6YW55KSB7XG4gICAgICB2YXIgc2VsZWN0ZWROb2RlSWQgPSBwYXJhbXMubm9kZXNbMF07XG4gICAgICBuZXR3b3JrLm9wZW5DbHVzdGVyKHNlbGVjdGVkTm9kZUlkLHt9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3JvdXRlXG4gICAgICAucGFyYW1zXG4gICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgIGlmKHBhcmFtc1snaWQnXSl7XG4gICAgICAgICAgLy8gbWVhbnMgd2UgY29tZSBmcm9tIHRoZSAnbWljcm9zZXJ2aWNlcycgdmlld1xuICAgICAgICAgIHRoaXMucmVwb3NpdG9yeSA9IHRoaXMuX2RhdGFwYXNzaW5nU2VydmljZS5nZXRSZXBvc2l0b3J5KCk7XG4gICAgICAgICAgdGhpcy5fcmVzdC5nZXREZWNvbXBvc2l0aW9uKHBhcmFtc1snaWQnXSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVjb21wb3NpdGlvbiA9IChyZXNwb25zZSBhcyBhbnkpW1wiX2JvZHlcIl07XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5ldHdvcmsoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgLy8gbWVhbnMgd2UgY29tZSBmcm9tIHRoZSAnZGVjb21wb3NlJyB2aWV3XG4gICAgICAgICAgdGhpcy5yZXBvc2l0b3J5ID0gdGhpcy5fZGF0YXBhc3NpbmdTZXJ2aWNlLmdldFJlcG9zaXRvcnkoKTtcbiAgICAgICAgICB0aGlzLmRlY29tcG9zaXRpb24gPSB0aGlzLl9kYXRhcGFzc2luZ1NlcnZpY2UuZ2V0RGVjb21wb3NpdGlvbigpO1xuICAgICAgICAgIHRoaXMuY3JlYXRlTmV0d29yaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxufVxuIl19
