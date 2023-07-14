import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/Todo";

function App() {
  const todos = [
    new Todo("Learn React"),
    new Todo("Learn Redux"),
    new Todo("Learn Node"),
    new Todo("Learn Express"),
    new Todo("Learn MongoDB"),
  ];

  return (
    <>
      <Todos items={todos} />
    </>
  );
}

export default App;
