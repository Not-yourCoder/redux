/* eslint-disable no-useless-catch */
import React, { useState } from 'react'
import { updateTodoItem } from '../../helpers/todoManipulation';

type Props = { todoItems: string, setEditMode: (value: boolean) => void; onSave: (value: string[]) => void }

const TodoEdit = (props: Props) => {
    const [inputValue, setInputValue] = useState(props.todoItems.title)
    const [save, setSave] = useState(false)

    const handleSave = async () => {
        setSave(true)
        try {
            await updateTodoItem(props.todoItems.id, inputValue)
            props.setEditMode(false)
            props.onSave(inputValue)
        } catch (error) {
            throw error
        } finally {
            setSave(false)
        }
    }
    const handleCancel = () => {
        props.setEditMode(false)
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    return (
        <div>
            <input value={inputValue} onChange={handleInputChange} />
            <div>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
            {save && <div>Saving...</div>}
        </div>
    )
}

export default TodoEdit