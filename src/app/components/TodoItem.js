class TodoItemController {

  /** @ngInject */
  constructor() {
  }

  handleDoubleClick() {
    this.startEdit({
      id: this.todo.id
    });
  }

  handleSave(text) {
    this.onSave({
      todo: {
        text,
        id: this.todo.id
      }
    });
  }

  handleDestroy(id) {
    this.onDestroy({ id });
  }

  isEditing() {
    return !!this.todo.inEdit;
  }
}

export default {
  template  : require('./TodoItem.html'),
  controller: TodoItemController,
  bindings  : {
    todo     : '<',
    onDestroy: '&',
    onChange : '&',
    onSave   : '&',
    startEdit: '&'
  }
};
