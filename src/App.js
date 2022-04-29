import TodoList from './components/TodoList';
import Form from './components/Form';
import Modal from './components/Modal';
import './index.css';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div>
      <Modal/>
      <Form />
      <TodoList />
      <TodoItem />
    </div>
  );
}

export default App;
