import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import useFetchTodo from '../../hooks/useFetchData';
import { useState } from "react";
import TodoEdit from "./TodoEdit";
import { TodoItem } from "../../types/todo.type";


interface TodoListProps {
    todoItems: TodoItem;
    priority: string[];
    onDelete: (index: number) => void
}

export const TodoList = ({ todoItems, priority, onDelete }: TodoListProps) => {


    const priorityColors: Record<string, string> = {
        Low: 'blue',
        Medium: 'green',
        High: 'red',
    };

    const { loading, error } = useFetchTodo()


    const [priorities, setPriorities] = useState(Array(todoItems.length).fill('low'));
    const [editMode, setEditMode] = useState(false)
    const [todoDetails, setTodoDetails] = useState("")


    const handlePriorityChange = (index: number, value: string) => {
        const newPriorities = [...priorities];
        newPriorities[index] = value;
        setPriorities(newPriorities);
    };
    const handleEditToggle = (details: TodoItem) => {
        setEditMode(prev => !prev)
        setTodoDetails(details)
    }
    const handleSaveTodo = (updatedTodo: string[]) => {
        console.log(updatedTodo)

    }

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Failed to fetch Todo List</div>
    }

    if (!todoItems) {
        return <div>No data available</div>
    }
    return (
        <div>
            {editMode ? <TodoEdit onSave={handleSaveTodo} todoItems={todoDetails} setEditMode={setEditMode} /> : (

                loading ? <div>Loading...</div> : (
                    todoItems.map((todo, index: number) => (
                        <div style={{ border: "1px solid rgba(0,0,0,0.2)", marginBottom: "12px", paddingInline: "6px", display: "flex", width: "100%", justifyContent: "space-between", borderRadius: "6px" }} key={index}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <input type="checkbox" name="check" id="check" />
                                <p style={{ marginLeft: "8px", color: priorityColors[priorities[index]] }}>{todo.title}</p>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <select name="color" id="color" value={priorities[index]} onChange={(e) => handlePriorityChange(index, e.target.value)}>
                                    {priority.map((item, index) => (
                                        <option value={item} key={index}>{item}</option>
                                    ))}
                                </select>

                                <MdEdit onClick={() => handleEditToggle(todoItems[index])} />
                                <MdDelete onClick={() => onDelete(index)} style={{ cursor: "pointer" }} />
                            </div>
                        </div>
                    ))
                )
            )}
        </div>
    )
}
