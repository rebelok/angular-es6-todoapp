const AutoFocus = $timeout => {
  'ngInject';

  return {
    restrict: 'A',

    link($scope, $element, $attrs) {
      $scope.$watch($attrs.autoFocus, autoFocus => {
        if (!autoFocus) {
          return;
        }
        $timeout(() => $element[ 0 ].focus());
      });
    }
  };
};

export default AutoFocus;