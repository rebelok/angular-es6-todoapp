class TodoTextInputController {

  /** @ngInject */
  constructor($timeout) {
    this.$timeout = $timeout;
    this.editing  = this.editing || false;
    this.text     = this.text || '';
  }

  handleBlur() {
    if (!this.newTodo) {
      this.onSave({ text: this.text });
    }
  }

  handleSubmit(e) {
    if (e.keyCode === 13) {
      this.onSave({ text: this.text });
      if (this.newTodo) {
        this.text = '';
      }
    }
  }

}

export default {
  template  : require('./TodoTextInput.html'),
  controller: TodoTextInputController,
  bindings  : {
    onSave     : '&',
    placeholder: '@',
    newTodo    : '@',
    editing    : '@',
    text       : '<'
  }
};
