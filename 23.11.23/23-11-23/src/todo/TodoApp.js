import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { useState } from 'react';
import TodoContext from "./TodoContext";

function TodoApp() {
    const [todos, setTodos] = useState([{ id: 1, todoName: 'Taking javascript class at 7 am' }, { id: 2, todoName: 'Taking javascript class at 7 am' }])
    const addTodo = (todoName) => {
        setTodos([...todos, { id: todos.length + 1, todoName }]);
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <TodoContext.Provider value={{todos, deleteTodo, addTodo}}>
                        <AddTodo/>
                        <TodoList/>
                    </TodoContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default TodoApp;