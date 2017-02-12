import { createAction, handleActions, combineActions } from 'redux-actions';

export const SHOW_ALL       = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_ACTIVE    = 'SHOW_ACTIVE';

export const showAll       = createAction(SHOW_ALL);
export const showCompleted = createAction(SHOW_COMPLETED);
export const showActive    = createAction(SHOW_ACTIVE);

const initialState = SHOW_ALL;

export default handleActions(
  {
    [combineActions(showAll, showCompleted, showActive)]: (state, { type }) => type
  },
  initialState
);

