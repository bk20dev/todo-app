import { useDispatch, useSelector } from 'react-redux';
import EmptyListImage from '../assets/undraw_happy_music_g6wc.svg';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { toggle } from '../reducers/tasksReducer';

const AllTasksPage = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const renderPlaceholder = () => {
    if (!tasks.length) {
      return (
        <img
          src={EmptyListImage}
          alt="Empty list"
          className="block mx-auto w-80 h-80 my-16"
        />
      );
    }
  };

  return (
    <div>
      <TodoForm />
      <TodoList tasks={tasks} onToggle={(id) => dispatch(toggle(id))} />
      {renderPlaceholder()}
    </div>
  );
};

export default AllTasksPage;
