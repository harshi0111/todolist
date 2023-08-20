import "./App.css";
import Todolist from "./components/todo";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTask from "./modals/createtask";

function App() {
  return (
    <div className="App">
      <Todolist />
      <CreateTask />
    </div>
  );
}

export default App;
