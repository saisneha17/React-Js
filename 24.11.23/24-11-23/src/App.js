import logo from './logo.svg';
import './App.css';
import User from './User';
import ProductsComponent from './Products';
import UsersList from './UsersList';
import TodoApp from './todo/TodoApp';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Employees from './Employees';
import Product from './Product';
import Register from './Register';
import Login from './Login';


function App() {
   
  return (
    <div className="App">
      {/* <ProductsComponent/> */}
      {/* <UsersList/> */}
      {/* <TodoApp/> */}
      <Navbar/>
      <Routes>
        <Route path="/todo-app" element={<TodoApp/>}></Route>
        <Route path="/users" element={<UsersList/>}></Route>
        <Route path="/employees" element={<Employees/>}></Route>
        <Route path="/product/:productName" element={<Product/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<ProductsComponent/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
