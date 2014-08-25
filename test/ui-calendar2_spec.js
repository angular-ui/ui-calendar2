describe('ui-calendar2', function () {
    describe('monthDirective', function () {
        var element,
            $scope;
        beforeEach(module('ui.bootstrap.calendar2', 'templates/month.html'));
        beforeEach(inject(function ($compile, $rootScope) {
            $scope = $rootScope;
            element = angular.element('<monthCal></monthCal>');
            $compile(element)($rootScope);
        }));
    });
});