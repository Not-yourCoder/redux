import "../../styles/todo.css"
import TodoItem from "./TodoItem"


function Todo() {
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
        <h2>Todo</h2>
        <TodoItem/>
      </section>
    </div>
  )
}

export default Todo