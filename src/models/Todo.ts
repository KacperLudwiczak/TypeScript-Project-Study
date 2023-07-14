export default class Todo {
  id: string = new Date().toISOString();
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
  }
}
