import { useState } from 'react';
import TodoContext from './TodoContext';
import { useContext } from 'react';
function AddTodo() {
    const [todoName, setTodoName] = useState('');
    const { addTodo } = useContext(TodoContext);

    return (
        <div className="d-flex align-items-center">
            <div class="mb-3">
                <label for="addTodo" class="form-label">Todo Name</label>
                <input type="text" class="form-control" id="addTodo" placeholder="Todo Name" onChange={(event) => setTodoName(event.target.value)}/>
            </div>
            <button className="btn btn-primary mt-3 ms-2" onClick={() => addTodo(todoName)}>Add</button>
        </div>
    )
}

export default AddTodo;