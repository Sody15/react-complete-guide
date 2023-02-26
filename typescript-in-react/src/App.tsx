import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [new Todo('Learn React'), new Todo('Learn Typescript')];

  return (
    <main>
      <Todos items={todos} />
    </main>
  );
}

export default App;
