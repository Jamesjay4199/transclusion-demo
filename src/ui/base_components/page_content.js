/**
 *  This component acts as the base template.
 *
 *  It specifies the slots needed for the pages and adds some higher level control using the base controller.
 */
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
    /**
     *  Assumes that there are some pages that would be loaded in an iframed.
     *  The logic to know that will be added when necessary.
     */
    $scope.iframed = false;
}]);