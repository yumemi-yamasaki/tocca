import { observable, action } from 'mobx';

export default class TodoStore {
  @observable datas = [];

  @action.bound
  onAdd(item) {
    this.todos = [...this.todos, todo];
  }

  @action.bound
  onDelete(item) {
    this.todos = this.todos.filter(t => t !== todo);
  }
}