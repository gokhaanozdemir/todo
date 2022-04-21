import { useStore } from "./useStore";
import "./App.css";
function App() {
  const text = useStore((state) => state.text);
  const handleChange = useStore((state) => state.handleChange);
  return (
    <div>
      <input type="text" value={text} 
      onChange={handleChange}
      />
      <button>Ekle</button>
    </div>
  );
}

export default App;
