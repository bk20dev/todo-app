import Footer from './Footer';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className="max-w-xl mx-auto h-full px-6">
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
