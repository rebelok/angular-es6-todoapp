import { get } from 'lodash';
const addId = () => next => action => {
  const isNewItem = get(action, 'meta.newItem');
  if (isNewItem) {
    action.meta.id = generateId();
  }
  return next(action);
};

const generateId = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

  return s4() + s4();
};

export default addId;