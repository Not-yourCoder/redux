export interface TodoState {
  todos: {
    todoItems: string[];
    loading : boolean;
    error: string | null;
  };
}

export interface InitialState {
  todoItems: string[];
  loading: boolean;
  error: string | null;
}
