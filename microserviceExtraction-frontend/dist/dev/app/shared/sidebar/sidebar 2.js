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
var SidebarComponent = (function () {
    function SidebarComponent() {
        this.isActive = false;
        this.showMenu = '';
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sidebar-cmp',
            templateUrl: 'sidebar.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2lkZWJhci9zaWRlYmFyIDIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQVExQztJQUFBO1FBQ0MsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQVcsRUFBRSxDQUFDO0lBV3ZCLENBQUM7SUFWQSxzQ0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNELHlDQUFjLEdBQWQsVUFBZSxPQUFZO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNyQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN6QixDQUFDO0lBQ0YsQ0FBQztJQWxCRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLGNBQWM7U0FDM0IsQ0FBQzs7d0JBQUE7SUFlRix1QkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksd0JBQWdCLG1CQWE1QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2lkZWJhci9zaWRlYmFyIDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnc2lkZWJhci1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ3NpZGViYXIuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IHtcblx0aXNBY3RpdmUgPSBmYWxzZTtcblx0c2hvd01lbnU6IHN0cmluZyA9ICcnO1xuXHRldmVudENhbGxlZCgpIHtcblx0XHR0aGlzLmlzQWN0aXZlID0gIXRoaXMuaXNBY3RpdmU7XG5cdH1cblx0YWRkRXhwYW5kQ2xhc3MoZWxlbWVudDogYW55KSB7XG5cdFx0aWYgKGVsZW1lbnQgPT09IHRoaXMuc2hvd01lbnUpIHtcblx0XHRcdHRoaXMuc2hvd01lbnUgPSAnMCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2hvd01lbnUgPSBlbGVtZW50O1xuXHRcdH1cblx0fVxufVxuIl19
