import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Todos items={["Todo 1", "Todo 2"]} />
    </>
  );
}

export default App;
