import React, { useState } from 'react'

type Props = {}

const color = ["red", "green", "yellow", "blue"]

const TodoItem = (props: Props) => {
    const [todoItem, setTodoItem] = useState<string[]>([]);
    const [error, setError] = useState("");
    const [inputValue, setInputValue] = useState("")

    const handleInput = (value: string) => {
        if (value.trim() === "") {
            setError("Input cannot be empty");
        } else {
            setTodoItem([...todoItem, value]);
            setInputValue("")
            setError("");
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setError("");
    }

    const handleDelete = (index: number) => {
        const updatedTodoItems = todoItem.filter((_, i) => i !== index);
        setTodoItem(updatedTodoItems);
    };

    return (
        <div style={{ maxWidth: "400px", border: "1px solid rgba(0,0,0,0.2)", boxShadow: "10px 10px rgba(0,0,0,0.14)", padding: "1.2rem 2rem" }}>
            <h2>What needs to be done</h2>
            <div style={{ margin: "1.2rem 0" }}>
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    style={{ padding: "8px 1rem", borderRadius: "50px", border: "1px solid", width: "70%" }}
                    value={inputValue}
                    onChange={handleChange}
                />
                <button
                    style={{ marginLeft: "10px", padding: "6px 1rem", background: "goldenrod" }}
                    onClick={() => handleInput((document.getElementById("todo") as HTMLInputElement)?.value)}
                >
                    Add
                </button>
            </div>
            <div>
                <TodoList todoItems={todoItem} color={color} onDelete={handleDelete} />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    )
}

export default TodoItem;

interface TodoListProps {
    todoItems: string[];
    color: string[];
}

const TodoList = ({ todoItems, color, onDelete }: TodoListProps) => {
    return (
        <div>
            {todoItems.map((todo, index) => (
                <div style={{ border: "1px solid rgba(0,0,0,0.2)", marginBottom: "12px", paddingInline: "6px", display: "flex", width: "100%", justifyContent: "space-between" }} key={index}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input type="checkbox" name="check" id="check" />
                        <p style={{ marginLeft: "8px" }}>{todo}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <select name="color" id="color">
                            {color.map((colors, index) => (
                                <option value={colors} key={index}>{colors}</option>
                            ))}
                        </select>
                        <p onClick={()=> onDelete(index)}>X</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
