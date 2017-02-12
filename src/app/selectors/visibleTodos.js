import { createSelector } from 'reselect';
import { SHOW_COMPLETED, SHOW_ACTIVE } from '../ducks/visibilityFilter';

const getVisibilityFilter = state => state.visibilityFilter;
const getTodos            = state => Object.keys(state.todos).map(getById(state));
const getById = state => id => state.todos[ id ];
const completedFilter = todo => todo.completed;
const activeFilter    = todo => !todo.completed;

export const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case SHOW_COMPLETED:
        return todos.filter(completedFilter);
      case SHOW_ACTIVE:
        return todos.filter(activeFilter);
      default:
        return todos;
    }
  }
);

export const getTodoCount = state => Object.keys(state.todos).length;

export const getCompletedCount = createSelector(
  [ getTodos ],
  todos => todos.filter(completedFilter).length
);

export const getActiveCount = createSelector(
  [ getTodos ],
  todos => todos.filter(activeFilter).length
);