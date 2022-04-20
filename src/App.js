import { useStore } from "./useStore";
function App() {
  const text = useStore(state => state.text);
  
  return (
    <div className="form">

      <input type="text" 
      value={text}
      />
      <button>Ekle</button>
    </div>
  );
}

export default App;
