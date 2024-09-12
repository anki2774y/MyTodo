import { Provider } from 'react-redux';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Todos from './Component/Todos/Todos';
import store from './Redux/store';
import TodoList from './Component/TodosList/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Todos />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
