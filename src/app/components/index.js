import angular from 'angular';
import Header from './Header';
import Footer from './Footer';
import MainSection from './MainSection';
import TodoItem from './TodoItem';
import TodoTextInput from './TodoTextInput';

const ComponentsModule = angular
  .module('app.components', [])
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .component('todoTextInput', TodoTextInput)
  .component('todoItem', TodoItem)
  .name;

export default ComponentsModule;