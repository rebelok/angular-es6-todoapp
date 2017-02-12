class MainSectionController {
  /** @ngInject */
  constructor() {
  }

  handleChange(id) {
    this.completeTodo({ id });
  }

  handleSave(e) {
    if (e.text.length) {
      this.editTodo({ id: e.id, text: e.text });
    } else {
      this.deleteTodo({ id: e.id });
    }
  }

  handleDestroy(e) {
    this.deleteTodo({ id: e });
  }

  idEditing(todo) {
    return todo.id === this.editingId;
  }

  startEdit(id) {
    this.startEditTodo({ id });
  }
}

export default {
  template  : require('./MainSection.html'),
  controller: MainSectionController,
  bindings  : {
    todos        : '<',
    filter       : '<',
    hasItems     : '<',
    areAllDone   : '<',
    editingId    : '<',
    completeAll  : '&',
    completeTodo : '&',
    editTodo     : '&',
    deleteTodo   : '&',
    startEditTodo: '&'
  }
};
