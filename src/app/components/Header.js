class HeaderController {
  /** @ngInject */
  constructor() {
  }

  handleSave(text) {
    if (text.trim().length !== 0) {
      this.addTodo({ text: text.trim() });
    }
  }
}

export default {
  template  : require('./Header.html'),
  controller: HeaderController,
  bindings  : {
    addTodo: '&'
  }
};
