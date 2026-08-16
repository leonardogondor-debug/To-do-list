import { RecoilRoot } from "recoil";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Todofilter from "./components/TodoFilter";

function App() {
  return (
    <div className="font-serif">
      <h1 className="text-center text-4xl">Lista de Tarefas</h1>
      <TodoForm />
      <Todofilter />
      <TodoList />
    </div>
  );
}

export default App;