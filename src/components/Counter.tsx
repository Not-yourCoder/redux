import { useDispatch, useSelector } from 'react-redux'
import { createStore } from 'redux'
import { CounterAction, CounterActionTypes, CounterState } from '../types/app.type'


//store
const initialState: CounterState = { value: 0 }


//actions
const increment = (): CounterAction => ({
    type: CounterActionTypes.INCREMENT
})

const decrement = () => ({
    type: CounterActionTypes.DECREMENT
})

//reducer
function counterReducer(state = initialState, action: CounterAction) {
    if (action.type === "increment") {
        return { ...state, value: state.value + 1 }
    }
    if (action.type === "decrement") {
        return { ...state, value: state.value - 1 }
    }
}
export const store = createStore(counterReducer, initialState)

const Counter = () => {

    const dispatch = useDispatch()
    const count = useSelector((state: CounterState) => state?.value)

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }


    return (
        <>
            <div>
                <h1>Counter</h1>
                <p>Count: {count}</p>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </>
    )
}

export default Counter