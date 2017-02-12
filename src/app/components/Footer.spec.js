import angular from 'angular';
import 'angular-mocks';
import  Footer  from './Footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../ducks/visibilityFilter';

describe('Footer component', () => {
  beforeEach(() => {
    angular
      .module('footerComponent', [ 'app/components/Footer.html' ])
      .component('footerComponent', Footer);
    angular.mock.module('footerComponent');
  });

  it('should has completed items', angular.mock.inject($componentController => {
    const bindings  = {
      completedCount: 1
    };
    const component = $componentController('footerComponent', {}, bindings);
    expect(component.hasCompletedItems()).toBeTruthy();
  }));

  it('should not has completed items', angular.mock.inject($componentController => {
    const bindings  = {
      completedCount: 0
    };
    const component = $componentController('footerComponent', {}, bindings);
    expect(component.hasCompletedItems()).toBeFalsy();
  }));

  it('should render correctly', angular.mock.inject(($rootScope, $compile) => {
    const $scope       = $rootScope.$new();
    $scope.activeCount = 2;
    const element      = $compile('<footer-component active-count="activeCount"></footer-component>')($scope);
    $scope.$digest();
    const footer = element.find('strong');
    expect(footer.html().trim()).toEqual('2');
  }));

  it('shoud call onClearCompleted', angular.mock.inject($componentController => {
    const bindings  = {
      onClearCompleted: () => {
      }
    };
    const component = $componentController('footerComponent', {}, bindings);
    spyOn(component, 'onClearCompleted').and.callThrough();
    component.handleClear();
    expect(component.onClearCompleted).toHaveBeenCalled();
  }));

  it('should have SHOW_ALL selected', angular.mock.inject($componentController => {
    const bindings  = {
      selectedFilter: SHOW_ALL
    };
    const component = $componentController('footerComponent', {}, bindings);
    expect(component.isShowAllSelected()).toBeTruthy();
    expect(component.isShowCompletedSelected()).toBeFalsy();
    expect(component.isShowActiveSelected()).toBeFalsy();
  }));

  it('should have SHOW_COMPLETED selected', angular.mock.inject($componentController => {
    const bindings  = {
      selectedFilter: SHOW_COMPLETED
    };
    const component = $componentController('footerComponent', {}, bindings);
    expect(component.isShowAllSelected()).toBeFalsy();
    expect(component.isShowCompletedSelected()).toBeTruthy();
    expect(component.isShowActiveSelected()).toBeFalsy();
  }));

  it('should have SHOW_ACTIVE selected', angular.mock.inject($componentController => {
    const bindings  = {
      selectedFilter: SHOW_ACTIVE
    };
    const component = $componentController('footerComponent', {}, bindings);
    expect(component.isShowAllSelected()).toBeFalsy();
    expect(component.isShowCompletedSelected()).toBeFalsy();
    expect(component.isShowActiveSelected()).toBeTruthy();
  }));

});

