export interface TodoState {
  todos: {
    todoItems: string[];
    error: string | null;
  };
}

export interface InitialState {
  todoItems: string[];
  error: string | null;
}
