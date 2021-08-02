import Footer from './Footer';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="max-w-xl mx-auto h-full px-6">
      <BrowserRouter>
        <Header />
        <Route path="/" exact>
          <TodoForm />
          <TodoList />
        </Route>
        <Route path="/active">
          <h1>Active</h1>
        </Route>
        <Route path="/completed">
          <h1>Completed</h1>
        </Route>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
