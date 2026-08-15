import { RecoilRoot } from "recoil";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Todofilter from "./components/TodoFilter";

function App() {
  return (
    <RecoilRoot>
      <h1>Lista de Tarefas</h1>
      <TodoForm />
      <Todofilter />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;