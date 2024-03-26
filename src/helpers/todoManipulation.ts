/* eslint-disable no-useless-catch */
export async function addTodo(todo) {
  try {
    const response = await fetch(
      "https://https://jsonplaceholder.typicode.com/todos",
      {
        method: "POST",
        body: JSON.stringify({
          title: todo,
          completed: false,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to add todo");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateTodoItem(todoId: number, updatedTodo: string) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          userId: todoId,
          id: todoId,
          title: updatedTodo,
          completed: false,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to update todo");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
