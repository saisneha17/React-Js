import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './slices/counter.slice';
import Users from './Users';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h3>Counter: {counter.value}</h3>
      <button onClick={() => dispatch(increment())} className="btn btn-success me-2">Increment</button>
      <button onClick={() => dispatch(decrement())} className="btn btn-warning me-2">Decrement</button>
      <button onClick={() => dispatch(reset())} className="btn btn-danger">Reset</button>
      <Users/>
    </div>
  );
}

export default App;
