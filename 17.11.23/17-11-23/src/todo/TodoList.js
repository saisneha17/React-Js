import { useContext } from "react";
import TodoContext from "./TodoContext";
import Todo from './Todo';

function TodoList() {
    const { todos } = useContext(TodoContext);
    return (
        <div className="row">
            <div className="col-sm">
                {todos.map(todo => (
                    <Todo todo={todo}/>
                ))}
            </div>
        </div>
    )
}

export default TodoList;