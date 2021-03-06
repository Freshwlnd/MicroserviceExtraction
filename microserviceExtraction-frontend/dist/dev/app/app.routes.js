"use strict";
var index_1 = require('./dashboard/clone/index');
var index_2 = require('./dashboard/home/index');
var index_3 = require('./dashboard/blank-page/index');
var index_4 = require('./dashboard/clone/index');
var index_5 = require('./dashboard/decompose/index');
var index_6 = require('./dashboard/graph/index');
var index_7 = require('./dashboard/microservices/index');
exports.routes = index_2.HomeRoutes.concat(index_3.BlankPageRoutes, index_4.CloneRoutes, index_5.DecomposeRoutes, index_6.GraphRoutes, index_7.MicroservicesRoutes, [
    { path: '**', component: index_1.CloneComponent },
]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxzQkFBK0IseUJBQXlCLENBQUMsQ0FBQTtBQUV6RCxzQkFBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQUNwRCxzQkFBZ0MsOEJBQThCLENBQUMsQ0FBQTtBQUMvRCxzQkFBNEIseUJBQXlCLENBQUMsQ0FBQTtBQUN0RCxzQkFBZ0MsNkJBQTZCLENBQUMsQ0FBQTtBQUM5RCxzQkFBNEIseUJBQXlCLENBQUMsQ0FBQTtBQUN0RCxzQkFBb0MsaUNBQWlDLENBQUMsQ0FBQTtBQUd6RCxjQUFNLEdBQ2Ysa0JBQVUsUUFDVix1QkFBZSxFQUNmLG1CQUFXLEVBQ1YsdUJBQWUsRUFDZixtQkFBVyxFQUNYLDJCQUFtQjtJQUN2QixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLHNCQUFjLEVBQUU7RUFDekMsQ0FBQyIsImZpbGUiOiJhcHAvYXBwLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENsb25lQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQvY2xvbmUvaW5kZXgnO1xuXG5pbXBvcnQgeyBIb21lUm91dGVzIH0gZnJvbSAnLi9kYXNoYm9hcmQvaG9tZS9pbmRleCc7XG5pbXBvcnQgeyBCbGFua1BhZ2VSb3V0ZXMgfSBmcm9tICcuL2Rhc2hib2FyZC9ibGFuay1wYWdlL2luZGV4JztcbmltcG9ydCB7IENsb25lUm91dGVzIH0gZnJvbSAnLi9kYXNoYm9hcmQvY2xvbmUvaW5kZXgnO1xuaW1wb3J0IHsgRGVjb21wb3NlUm91dGVzIH0gZnJvbSAnLi9kYXNoYm9hcmQvZGVjb21wb3NlL2luZGV4JztcbmltcG9ydCB7IEdyYXBoUm91dGVzIH0gZnJvbSAnLi9kYXNoYm9hcmQvZ3JhcGgvaW5kZXgnO1xuaW1wb3J0IHsgTWljcm9zZXJ2aWNlc1JvdXRlcyB9IGZyb20gJy4vZGFzaGJvYXJkL21pY3Jvc2VydmljZXMvaW5kZXgnO1xuXG5cbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcblx0Li4uSG9tZVJvdXRlcyxcblx0Li4uQmxhbmtQYWdlUm91dGVzLFxuXHQuLi5DbG9uZVJvdXRlcyxcbiAgLi4uRGVjb21wb3NlUm91dGVzLFxuICAuLi5HcmFwaFJvdXRlcyxcbiAgLi4uTWljcm9zZXJ2aWNlc1JvdXRlcyxcblx0eyBwYXRoOiAnKionLCBjb21wb25lbnQ6IENsb25lQ29tcG9uZW50IH0sXG5dO1xuIl19
