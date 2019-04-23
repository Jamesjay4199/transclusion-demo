/**
 * Creates a directive to be used with the page_content directive.
 * It houses the main page content and footer.
 * Main purpose is to extract content needed to show in an iframe if needed.
 */
demo.directive('warningLoader', function () {
    return {
        restrict: 'E',
        transclude: {
            'content': 'content',       // Main page content 
            'footer' : '?pageFooter'    // Optional footer content
        },
        templateUrl: '/src/ui/base_components/warning_loader.html'
    }
})