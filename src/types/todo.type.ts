export interface TodoState {
  todos: {
    todoItems: string[];
    loading: boolean;
    error: string | null;
  };
}

export interface InitialState {
  todoItems: string[];
  loading: boolean;
  error: string | null;
}

export interface TodoItem {
  id: number;
  title: string | string[];
}
