import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../ducks/visibilityFilter';

class FooterController {
  /** @ngInject */
  constructor() {
  }

  hasCompletedItems() {
    return this.completedCount > 0;
  }

  handleClear() {
    this.onClearCompleted();
  }

  isShowAllSelected() {
    return this.selectedFilter === SHOW_ALL;
  }

  isShowCompletedSelected() {
    return this.selectedFilter === SHOW_COMPLETED;
  }

  isShowActiveSelected() {
    return this.selectedFilter === SHOW_ACTIVE;
  }

}

export default {
  template  : require('./Footer.html'),
  controller: FooterController,
  bindings  : {
    completedCount  : '<',
    activeCount     : '<',
    selectedFilter  : '<',
    onClearCompleted: '&',
    showAll         : '&',
    showActive      : '&',
    showCompleted   : '&'
  }
};
