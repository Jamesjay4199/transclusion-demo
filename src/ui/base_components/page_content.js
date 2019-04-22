demo.directive('pageContent', function () {
    // main page content
    return {
        restrict: 'E',
        transclude: {
            'header': '?headerContent', // the question mark denotes that it is optional
            'main-content': 'mainContent', // loads the warning_loader component
        },
        templateUrl: '/src/ui/base_components/page_content.html'
    };
}).controller('baseController', ['$scope', function ($scope) {
    $scope.iframed = false;
}]);