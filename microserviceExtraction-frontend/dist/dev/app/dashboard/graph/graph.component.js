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
                    springLength: 20,
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
                    _this.decomposition = response._body;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZ3JhcGgvZ3JhcGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsNkJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFFMUQsdUJBQStCLGlCQUFpQixDQUFDLENBQUE7QUFDakQsb0NBQW1DLG9DQUFvQyxDQUFDLENBQUE7QUFleEU7SUFVRSx3QkFBb0IsS0FBbUIsRUFBVSxNQUFzQixFQUFVLG1CQUF1QztRQUFwRyxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO0lBRXhILENBQUM7SUFHRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFNUIsSUFBSSxPQUFPLEdBQUc7WUFDWixPQUFPLEVBQUU7Z0JBRVAsZ0JBQWdCLEVBQUM7b0JBQ2YscUJBQXFCLEVBQUUsQ0FBQyxJQUFJO29CQUM1QixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsY0FBYyxFQUFFLENBQUM7b0JBQ2pCLGNBQWMsRUFBRSxHQUFHO29CQUNuQixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsWUFBWSxFQUFFLENBQUM7b0JBQ2YsT0FBTyxFQUFFLENBQUM7aUJBQ1g7YUFDRjtTQUNGLENBQUM7UUFFRixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVuRCxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7UUFFdEIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWxCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVsQixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUMx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QSxDQUFDO2dCQUVmLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMzRCxLQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVE7b0JBQzFELEtBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztvQkFDcEMsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN2QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFFSixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDakUsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF6R0Q7UUFBQyxnQkFBUyxDQUFDLFdBQVcsQ0FBQzs7c0RBQUE7SUFoQnpCO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNsQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FFekIsQ0FBQzs7c0JBQUE7SUFvSEYscUJBQUM7QUFBRCxDQWxIQSxBQWtIQyxJQUFBO0FBbEhZLHNCQUFjLGlCQWtIMUIsQ0FBQSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2dyYXBoL2dyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVzdC5zZXJ2aWNlJztcbmltcG9ydCB7IFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVwb3NpdG9yeS5tb2RlbCc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEYXRhUGFzc2luZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGF0YXBhc3Npbmcuc2VydmljZVwiO1xuXG5cblxuZGVjbGFyZSB2YXIgdmlzOiBhbnk7XG5cblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZ3JhcGgtdmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmFwaC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1Jlc3RTZXJ2aWNlXVxuXG59KVxuXG5leHBvcnQgY2xhc3MgR3JhcGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgcmVwb3NpdG9yeTogUmVwb3NpdG9yeTtcblxuICBkZWNvbXBvc2l0aW9uOiBhbnk7XG5cbiAgaXNEYXRhQXZhaWxhYmxlOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ215bmV0d29yaycpIG5ldHdvcmtEaXY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVzdCA6IFJlc3RTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2RhdGFwYXNzaW5nU2VydmljZTogRGF0YVBhc3NpbmdTZXJ2aWNlKXtcblxuICB9XG5cblxuICBjcmVhdGVOZXR3b3JrKCk6IHZvaWQge1xuICAgIHRoaXMuaXNEYXRhQXZhaWxhYmxlID0gdHJ1ZTtcblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgcGh5c2ljczoge1xuXG4gICAgICAgIGZvcmNlQXRsYXMyQmFzZWQ6e1xuICAgICAgICAgIGdyYXZpdGF0aW9uYWxDb25zdGFudDogLTEwMDAsXG4gICAgICAgICAgc3ByaW5nTGVuZ3RoOiA1MCxcbiAgICAgICAgICBjZW50cmFsR3Jhdml0eTogMCxcbiAgICAgICAgICBzcHJpbmdDb25zdGFudDogMC45LFxuICAgICAgICAgIHNwcmluZ0xlbmd0aDogMjAsXG4gICAgICAgICAgYXZvaWRPdmVybGFwOiAxLFxuICAgICAgICAgIGRhbXBpbmc6IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgbWljcm9zZXJ2aWNlcyA9IEpTT04ucGFyc2UodGhpcy5kZWNvbXBvc2l0aW9uKTtcblxuICAgIHZhciBjb21wb25lbnRJZHMgPSBbXTtcblxuICAgIHZhciBub2RlTGlzdCA9IFtdO1xuXG4gICAgdmFyIGVkZ2VMaXN0ID0gW107XG5cbiAgICBmb3IodmFyIGk9MDsgaSA8IG1pY3Jvc2VydmljZXMubGVuZ3RoOyBpKyspe1xuICAgICAgY29tcG9uZW50SWRzLnB1c2gobWljcm9zZXJ2aWNlc1tpXS5jb21wb25lbnRJZCk7XG5cbiAgICAgIGZvcih2YXIgaz0wOyBrIDwgbWljcm9zZXJ2aWNlc1tpXS5ub2Rlcy5sZW5ndGg7IGsrKyl7XG4gICAgICAgIHZhciBub2RlID0gbWljcm9zZXJ2aWNlc1tpXS5ub2Rlc1trXTtcbiAgICAgICAgbm9kZS5jb21wb25lbnRJZCA9IG1pY3Jvc2VydmljZXNbaV0uY29tcG9uZW50SWQ7XG4gICAgICAgIG5vZGVMaXN0LnB1c2gobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGZvcih2YXIgaz0wOyBrIDwgbWljcm9zZXJ2aWNlc1tpXS5lZGdlcy5sZW5ndGg7IGsrKyl7XG4gICAgICAgIGNvbnNvbGUubG9nKG1pY3Jvc2VydmljZXNbaV0uZWRnZXNba10pO1xuICAgICAgICBlZGdlTGlzdC5wdXNoKG1pY3Jvc2VydmljZXNbaV0uZWRnZXNba10pO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gcHJvdmlkZSB0aGUgZGF0YSBpbiB0aGUgdmlzIGZvcm1hdFxuICAgIHZhciBkYXRhID0ge1xuICAgICAgbm9kZXM6IG5ldyB2aXMuRGF0YVNldChub2RlTGlzdCksXG4gICAgICBlZGdlczogbmV3IHZpcy5EYXRhU2V0KGVkZ2VMaXN0KVxuICAgIH07XG5cbiAgICB2YXIgaW5pdGlhdGVkID0gZmFsc2U7XG5cbiAgICB2YXIgbmV0d29yayA9IG5ldyB2aXMuTmV0d29yayh0aGlzLm5ldHdvcmtEaXYubmF0aXZlRWxlbWVudCwgZGF0YSwgb3B0aW9ucyk7XG5cbiAgICAvLyBmb3JtIGNsdXN0ZXJzIGFmdGVyIGRyYXdpbmcgdGhlIG5vZGVzXG4gICAgbmV0d29yay5vbihcImFmdGVyRHJhd2luZ1wiLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBpZihpbml0aWF0ZWQ9PWZhbHNlKXtcblxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY29tcG9uZW50SWRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGpvaW5Db25kaXRpb246IGZ1bmN0aW9uKG5vZGVPcHRpb25zKXtcblxuICAgICAgICAgICAgICBpZihub2RlT3B0aW9ucy5jb21wb25lbnRJZCA9PSBjb21wb25lbnRJZHNbaV0pe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgIG5ldHdvcmsuY2x1c3RlcihvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpbml0aWF0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICBuZXR3b3JrLm9uKFwic2VsZWN0Tm9kZVwiLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICB2YXIgc2VsZWN0ZWROb2RlSWQgPSBwYXJhbXMubm9kZXNbMF07XG4gICAgICBuZXR3b3JrLm9wZW5DbHVzdGVyKHNlbGVjdGVkTm9kZUlkLHt9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3JvdXRlXG4gICAgICAucGFyYW1zXG4gICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgIGlmKHBhcmFtc1snaWQnXSl7XG4gICAgICAgICAgLy8gbWVhbnMgd2UgY29tZSBmcm9tIHRoZSAnbWljcm9zZXJ2aWNlcycgdmlld1xuICAgICAgICAgIHRoaXMucmVwb3NpdG9yeSA9IHRoaXMuX2RhdGFwYXNzaW5nU2VydmljZS5nZXRSZXBvc2l0b3J5KCk7XG4gICAgICAgICAgdGhpcy5fcmVzdC5nZXREZWNvbXBvc2l0aW9uKHBhcmFtc1snaWQnXSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVjb21wb3NpdGlvbiA9IHJlc3BvbnNlLl9ib2R5O1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVOZXR3b3JrKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIC8vIG1lYW5zIHdlIGNvbWUgZnJvbSB0aGUgJ2RlY29tcG9zZScgdmlld1xuICAgICAgICAgIHRoaXMucmVwb3NpdG9yeSA9IHRoaXMuX2RhdGFwYXNzaW5nU2VydmljZS5nZXRSZXBvc2l0b3J5KCk7XG4gICAgICAgICAgdGhpcy5kZWNvbXBvc2l0aW9uID0gdGhpcy5fZGF0YXBhc3NpbmdTZXJ2aWNlLmdldERlY29tcG9zaXRpb24oKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZU5ldHdvcmsoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==
