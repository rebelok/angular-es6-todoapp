import { getVisibleTodos, getActiveCount, getCompletedCount, getTodoCount } from '../selectors/visibleTodos';

import { showAll, showCompleted, showActive } from '../ducks/visibilityFilter';
import {
  addTodo,
  completeAll,
  completeTodo,
  clearCompleted,
  deleteTodo,
  editTodo,
  startEditTodo
} from '../ducks/todos';

class AppController {

  /** @ngInject */
  constructor($ngRedux) {
    const actions = {
      showAll, showCompleted, showActive,
      addTodo, completeAll, completeTodo,
      clearCompleted, deleteTodo, editTodo,
      startEditTodo
    };

    this.unsubscribeStore = $ngRedux.connect(this.mapStateToThis, actions)(this);
  }

  $onDestroy() {
    this.unsubscribeStore();
  }

  hasItems() {
    return !!this.todoCount;
  }

  areAllDone() {
    return this.hasItems() && this.todoCount === this.completedCount;
  }

  mapStateToThis(state) {
    return {
      todoCount       : getTodoCount(state),
      completedCount  : getCompletedCount(state),
      activeCount     : getActiveCount(state),
      todos           : getVisibleTodos(state),
      visibilityFilter: state.visibilityFilter
    };
  }
}

export const App = {
  template  : require('./App.html'),
  controller: AppController
};
