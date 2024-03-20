import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, clearError, deleteTodo, setError } from '../../features/todoFeatures/todoSlice'
import { TodoState } from '../../types/todo.type'
import { IoMdClose } from "react-icons/io";
import { VscAdd } from "react-icons/vsc";


const priority = ["Low", "Medium", "High"]

export const TodoItem = () => {

    const [inputValue, setInputValue] = useState("")



    const dispatch = useDispatch()
    const todoItems = useSelector((state: TodoState) => state.todos.todoItems)
    const error = useSelector((state: TodoState) => state.todos.error)

    const handleInput = () => {

        if (inputValue.trim() === "") {
            dispatch(setError("Input cannot be empty"));
        } else {
            dispatch(addTodo(inputValue))
            setInputValue("")
            dispatch(clearError())
        }
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setInputValue(e.target.value); dispatch(clearError()) }
    const handleDelete = (index: number) => {
        dispatch(deleteTodo(index))
    };

    return (
        <div style={{ maxWidth: "400px", border: "1px solid rgba(0,0,0,0.2)", boxShadow: "10px 10px rgba(0,0,0,0.14)", padding: "1.2rem 2rem" }}>
            <h2>What needs to be done</h2>
            <div style={{ margin: "1.2rem 0", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    style={{ padding: "8px 1rem", borderRadius: "50px", border: "1px solid", width: "70%", fontSize: "1.125rem" }}
                    value={inputValue}
                    onChange={(e) => handleChange(e)}
                />

                <VscAdd fontSize={"21px"} style={{

                    marginLeft: "6px", padding: "6.6px", cursor: "pointer", borderRadius: "55%", transition: 'all 0.3s ease'
                }}
                    onClick={handleInput}
                    className=''
                    id='add-todo'
                    onMouseOver={() => document.getElementById('add-todo')?.classList.add('hover-add')}
                    onMouseOut={() => document.getElementById('add-todo')?.classList.remove('hover-add')} />
            </div>
            <div>
                <TodoList todoItems={todoItems} priority={priority} onDelete={handleDelete} />
            </div>
            {!todoItems.length ? <p>Nothing to do.</p> : <p>Things to do : {todoItems.length}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    )
}



interface TodoListProps {
    todoItems: string[];
    priority: string[];
    onDelete: (index: number) => void
}

const TodoList = ({ todoItems, priority, onDelete }: TodoListProps) => {


    const priorityColors: Record<string, string> = {
        Low: 'blue',
        Medium: 'green',
        High: 'red',
    };

    const [priorities, setPriorities] = useState<string[]>(Array(todoItems.length).fill('low'));

    const handlePriorityChange = (index: number, value: string) => {
        const newPriorities = [...priorities];
        newPriorities[index] = value;
        setPriorities(newPriorities);
    };

    return (
        <div>
            {todoItems.map((todo, index) => (
                <div style={{ border: "1px solid rgba(0,0,0,0.2)", marginBottom: "12px", paddingInline: "6px", display: "flex", width: "100%", justifyContent: "space-between" }} key={index}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input type="checkbox" name="check" id="check" />
                        <p style={{ marginLeft: "8px", color: priorityColors[priorities[index]] }}>{todo}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <select name="color" id="color" value={priorities[index]} onChange={(e) => handlePriorityChange(index, e.target.value)}>
                            {priority.map((item, index) => (
                                <option value={item} key={index}>{item}</option>
                            ))}
                        </select>

                        <IoMdClose onClick={() => onDelete(index)} style={{ cursor: "pointer" }} />
                    </div>
                </div>
            ))}
        </div>
    )
}
