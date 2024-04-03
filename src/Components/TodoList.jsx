import { useState, useEffect } from 'react';
import { BsPlus, BsTrash, BsPencil } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../store/todoSlice'; // Importing Redux actions
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoList = () => {
  const dispatch = useDispatch(); // Get dispatch function from Redux
  const todos = useSelector(state => state.todos); // Get todos from Redux state
  const [inputValue, setInputValue] = useState(''); // State for input value
  const [editingId, setEditingId] = useState(null); // State for editing todo id

  // Save todos to local storage when todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      dispatch({ type: 'todos/setTodos', payload: storedTodos });
    }
  }, [dispatch]);

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle adding a new todo
  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      if (editingId) { // If editing, dispatch editTodo action
        dispatch(editTodo({ id: editingId, text: inputValue }));
        setEditingId(null);
        toast.success('Todo updated successfully');
      } else { // If not editing, dispatch addTodo action
        dispatch(addTodo({ id: uuidv4(), text: inputValue }));
        toast.success('Todo added successfully');
      }
      setInputValue(''); // Clear input value
    } else {
      toast.error('Please enter a todo'); // Show error if input is empty
    }
  };

  // Handle deleting a todo
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id)); // Dispatch deleteTodo action
    toast.error('Todo deleted successfully'); // Show success message
  };

  // Handle editing a todo
  const handleEditTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id); // Find todo by id
    if (todo) {
      setInputValue(todo.text); // Set input value to todo text
      setEditingId(id); // Set editingId state
    }
  };

  return (
    <div  className="container border mt-5 pb-3 px-5">
      <h1 className="text-center my-3 font-sans text-[#FFAF45]">Todo List</h1>
      <div className="input-group mb-3 d-flex flex-row gap-1">
        <input
          style={{ outline: 'none', border: 'none' }}
          type="text"
          className="form-control"
          placeholder="Add a new todo"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={handleAddTodo}>
          <BsPlus />
        </button>
      </div>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item d-flex justify-content-between" key={todo.id}>
            {todo.text}
            <div>
              <button className="btn btn-outline-primary mr-2" onClick={() => handleEditTodo(todo.id)}>
                <BsPencil />
              </button>
              <button className="btn btn-outline-danger ml-2" onClick={() => handleDeleteTodo(todo.id)}>
                <BsTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default TodoList;
