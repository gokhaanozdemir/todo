import TodoList from './components/TodoList';
import Form from './components/Form';
import './index.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Form />
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </>
  );
}

export default App;
