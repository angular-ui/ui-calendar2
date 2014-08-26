/* globals angular */
'use strict';

var cal2 = angular.module('ui.bootstrap.calendar2', []);

cal2.directive('monthCal', ['dateFilter', function (dateFilter) {
        return {
            restrict: 'AE',
            replace: 'true',
            templateUrl: 'template/month.html'
        };
}]);