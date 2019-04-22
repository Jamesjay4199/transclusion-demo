demo.directive('warningLoader', function () {
    return {
        restrict: 'E',
        transclude: {
            'content': 'content',
            'footer' : '?pageFooter'
        },
        templateUrl: '/src/ui/base_components/warning_loader.html'
    }
})