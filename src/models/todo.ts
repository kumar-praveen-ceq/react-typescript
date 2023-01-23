class Todo {
  id: string;
  text: string;
  constructor(textValue: string) {
    this.text = textValue;
    this.id = new Date().toISOString();
  }
}

export default Todo;
