import { createAction, handleActions } from 'redux-actions';

const ADD_TODO        = 'ADD_TODO';
const COMPLETE_TODO   = 'COMPLETE_TODO';
const DELETE_TODO     = 'DELETE_TODO';
const EDIT_TODO       = 'EDIT_TODO';
const START_EDIT_TODO = 'START_EDIT_TODO';
const COMPLETE_ALL    = 'COMPLETE_ALL';
const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const addTodo = createAction(ADD_TODO, null, () => ({ newItem: true }));

export const completeTodo = createAction(COMPLETE_TODO);

export const deleteTodo = createAction(DELETE_TODO);

export const startEditTodo = createAction(START_EDIT_TODO);

export const editTodo = createAction(EDIT_TODO, (id, text) => ({ id, text }));

export const completeAll = createAction(COMPLETE_ALL);

export const clearCompleted = createAction(CLEAR_COMPLETED);

const initialState = {};

const todosReducer = handleActions({
    [addTodo]: (state, action) => ({
      ...state, [action.meta.id]: { text: action.payload, id: action.meta.id, completed: false }
    }),

    [completeTodo]: (state, action) => {
      const id   = action.payload;
      const todo = state[ id ];
      return { ...state, [id]: { ...todo, completed: !todo.completed } };
    },

    [deleteTodo]: (state, action) => {
      const filteredIds = Object.keys(state).filter(filterDeleted(action.payload));
      return Object.assign(...filteredIds.map(getById(state)));
    },

    [startEditTodo]: (state, action) => {
      const id   = action.payload;
      const todo = state[ id ];
      return { ...state, [id]: { ...todo, inEdit: true } };
    },

    [editTodo]: (state, action) => {
      const id   = action.payload.id;
      const todo = state[ action.payload.id ];
      return { ...state, [id]: { ...todo, inEdit: false, text: action.payload.text } };
    },

    [completeAll]: state => {
      return Object.assign({}, ...Object.keys(state).map(markAllCompleted(state)));
    },

    [clearCompleted]: state => {
      const filteredIds = Object.keys(state).filter(filterActive(state));
      return Object.assign({}, ...filteredIds.map(getById(state)));
    },

  },
  initialState);

export default todosReducer;

const filterDeleted    = deletedId => id => id !== deletedId;
const filterActive     = state => id => !state[ id ].completed;
const getById          = state => id => ({ [id]: state[ id ] });
const markAllCompleted = state => id => ({ [id]: Object.assign({}, state[ id ], { completed: true }) });