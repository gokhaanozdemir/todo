import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TodoList from './components/TodoList';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
