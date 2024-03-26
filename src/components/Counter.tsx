import "../styles/todo.css"
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../features/counterFeatures/counterSlice";


function Todo() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }

    const handleReset = () => {
        dispatch(reset())
    }
    return (
        <div className="Main">
            <nav>
                <section>
                    <h1>Redux Fundamentals Example</h1>

                    <div className="navContent">
                        <div className="navLinks"></div>
                    </div>
                </section>
            </nav>
            <section>
                <h2>Counter</h2>
                <div>
                    <IoIosAdd onClick={handleIncrement} />
                    <p>{count}</p>
                    <FiMinus onClick={handleDecrement} />
                </div>
                <button onClick={handleReset}>Reset</button>
            </section>
        </div>
    )
}

export default Todo