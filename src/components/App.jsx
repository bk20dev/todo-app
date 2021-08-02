import Footer from './Footer';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className="max-w-xl mx-auto h-full px-6">
      <Header />
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
