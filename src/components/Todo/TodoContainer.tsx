import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodoStart, fetchTodoFailure, fetchTodoSuccess, deleteTodo } from '../../features/todoFeatures/todoSlice'
import { TodoState } from '../../types/todo.type'
import { VscAdd } from "react-icons/vsc";
import { TodoList } from './TodoList';



const priority = ["Low", "Medium", "High"]

const TodoContainer = () => {

    const [inputValue, setInputValue] = useState("")

    const dispatch = useDispatch()
    const todoItems = useSelector((state: TodoState) => state.todos.todoItems)
    const error = useSelector((state: TodoState) => state.todos.error)
    console.log(todoItems)
    useEffect(() => {
        dispatch(fetchTodoStart())
    }, [dispatch])

    const handleChange = (e) => {
        setInputValue(e.target.value)

    }

    const handleInput = () => {
        if (inputValue.trim() === "") {
            dispatch(fetchTodoFailure("Input cannot be empty"))
        } else {
            dispatch(fetchTodoStart())
            setInputValue("")
            dispatch(fetchTodoFailure(""))
        }
    }

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
            {todoItems.length ? <p>Things to do : {todoItems.length}</p> : <p>Nothing to do.</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    )
}



export default TodoContainer;