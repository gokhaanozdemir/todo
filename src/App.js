import TodoList from './components/TodoList';
import Form from './components/Form';

import './index.css';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div>
      <Form />
      <TodoList />
      <TodoItem/>
    </div>
  );
}

export default App;
