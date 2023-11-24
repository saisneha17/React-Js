import TodoContext from "./TodoContext";
import { useContext } from "react";

function Todo(props) {
    const { deleteTodo } = useContext(TodoContext);

    return (
        <div className="p-3" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', margin: '10px' }}>
            <h5>{props.todo.todoName}<button className="ms-2 btn btn-danger" onClick={() => deleteTodo(props.todo.id)}>Delete</button></h5>
        </div>
    )
}

export default Todo;